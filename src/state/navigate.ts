import { writable } from 'svelte/store'
import type { SvelteComponent } from 'svelte'

/**
 * RouterConfig describes the mapping from paths to Svelte components.
 * It is used to define which component should be rendered for each route.
 */
export interface RouterConfig {
  [path: string]: typeof SvelteComponent
}

/**
 * CheckNavigateFunction is a type for a function that can determine
 * whether navigation to a new path should proceed and override the path.
 *
 * @param path The path obtained from the href attribute of the anchor tag.
 * @returns A boolean or a promise that resolves to a boolean indicating
 *          if navigation should proceed, and optionally an override path.
 */
type CheckNavigateFunction = (path: string | null) => boolean | Promise<boolean>

/**
 * The current route path as a writable Svelte store.
 * This store updates whenever the route changes.
 */
export const route = writable<string>(window.location.pathname)

/**
 * Navigates to a new path using the History API and updates the route store.
 *
 * @param path The path to navigate to.
 */
export function navigate(path: string): void {
  history.pushState({}, '', path)
  route.set(path)
}

// Listen for browser navigation events (back/forward) and update the route accordingly.
window.onpopstate = (): void => {
  route.set(window.location.pathname)
}

/**
 * A Svelte action to enhance elements with SPA navigation capabilities.
 * This action prevents the default link behavior and uses the History API
 * to navigate without reloading the page.
 *
 * Usage:
 * <a href="/example" use:link>Example</a>
 * <button use:link={() => customLogic()}>Navigate on Click</button>
 *
 * @param node The HTML element this action is attached to.
 * @param fun An optional function to decide if and where navigation should proceed.
 * @returns An object with a destroy method to clean up event listeners.
 */
export function link(node: HTMLElement, fun?: CheckNavigateFunction) {
  // Handles click events on the element to navigate.
  const handleClick = async (event: MouseEvent): Promise<void> => {
    event.preventDefault()
    const path = node.getAttribute('href')

    try {
      let shouldNavigate = true

      // If a custom navigation check function is provided, use it.
      if (fun) {
        shouldNavigate = await fun(path)
      }

      // Navigate if allowed.
      if (shouldNavigate && path) {
        navigate(path)
      } else if (shouldNavigate) {
        console.warn(
          'link action was triggered but no valid href was provided and fun did not prevent the action.'
        )
      }
    } catch (error: unknown) {
      // Error handling to log navigation issues.
      if (error instanceof Error) {
        console.error('Error during navigation:', error.message)
      } else {
        console.error('An unexpected error occurred during navigation:', error)
      }
    }
  }

  // Attach the event listener to the element.
  node.addEventListener('click', handleClick)

  return {
    // Clean up the event listener when the element is destroyed.
    destroy() {
      node.removeEventListener('click', handleClick)
    }
  }
}
