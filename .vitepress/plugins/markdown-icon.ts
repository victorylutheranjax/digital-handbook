/**
 * Replaces @icon-name@ with <Icon name="icon-name" />
 */

import type MarkdownIt from "markdown-it";

export function markdownIconPlugin(md: MarkdownIt) {
  // Store the original text rule
  const defaultRender =
    md.renderer.rules.text || ((tokens, idx) => tokens[idx].content);

  // Override the text renderer
  md.renderer.rules.text = (tokens, idx, options, env, self) => {
    const content = tokens[idx].content;

    // Check if content contains icon pattern
    if (content.includes("@")) {
      // Replace icon patterns with component
      const replaced = content.replace(
        /@([a-z0-9-]{2,})@/g,
        (match, iconName) => {
          return `<Icon name="${iconName}" />`;
        }
      );

      if (replaced !== content) {
        return replaced;
      }
    }

    return defaultRender(tokens, idx, options, env, self);
  };
}
