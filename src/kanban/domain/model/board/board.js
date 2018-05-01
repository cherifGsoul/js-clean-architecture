module.exports = (id, title) => {
  return {
    id() {
      return id;
    },
    title() {
      return title;
    }
  }
}