export const youtubeConfig = {
  name: 'youtube',
  prefix: '<span data-type="video"',
  suffix: '</span>',
  url: 'https://www.youtube.com/watch?v=',
};

export function renderYoutube(id) {
  const videoLink = `${youtubeConfig.url}${id}`;
  return `${youtubeConfig.prefix} data-name="${youtubeConfig.name}" ` +
    `data-value="${videoLink}" >${videoLink}${youtubeConfig.suffix}`;
}
