function getImageURL(group,img) {
  return new URL(`../assets/${group}/${img}`, import.meta.url).href;
}

export { getImageURL };