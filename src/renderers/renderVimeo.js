export const vimeoConfig = {
  name: 'vimeo',
  prefix: '<span data-type="video"',
  suffix: '</span>',
  url: 'https://vimeo.com/',
};

export function renderVimeo(id) {
  const videoLink = `${vimeoConfig.url}${id}`;
  return `${vimeoConfig.prefix} data-name="${vimeoConfig.name}" ` +
    `data-value="${videoLink}" >${videoLink}${vimeoConfig.suffix}`;
}
