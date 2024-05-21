<script lang="ts">
  import NotFoundLayout from '@layouts/NotFound.svelte'
  import { route } from '@state/navigate.ts'
  import type { RouterConfig } from '@state/navigate.ts'
  import type { SvelteComponent } from 'svelte'

  export let config: RouterConfig = {}

  $: current_path = $route
  $: [current_component, params] = matchRoute(current_path, config) || [NotFoundLayout, {}]

  /**
   * Matches the current path against the configured routes and returns the corresponding
   * component and extracted parameters.
   */
  function matchRoute(
    path: string,
    config: RouterConfig
  ): [typeof SvelteComponent, Record<string, string>] | null {
    // Decode the path to handle encoded characters
    const decodedPath = decodeURIComponent(path)

    // Iterate over the route configurations to find a match
    for (const pattern in config) {
      const regex = patternToRegex(pattern)
      const match = regex.exec(decodedPath)
      if (match) {
        return [config[pattern], extractParams(pattern, match)]
      }
    }
    return null
  }

  /**
   * Converts a route pattern like "/some/:param" into a RegExp.
   */
  function patternToRegex(pattern: string): RegExp {
    const regex = pattern
      .split('/')
      .map((part) => (part.startsWith(':') ? '([^/]+)' : part))
      .join('/')
    return new RegExp(`^${regex}$`)
  }

  /**
   * Extracts the parameters from a matched path.
   */
  function extractParams(pattern: string, match: RegExpExecArray): Record<string, string> {
    const paramNames = pattern
      .split('/')
      .filter((part) => part.startsWith(':'))
      .map((part) => part.substring(1))
    const params = {}
    paramNames.forEach((name, index) => {
      params[name] = match[index + 1] // match[0] is the full match, params start at index 1
    })
    return params
  }
</script>

<svelte:component this={current_component} {...params} />
