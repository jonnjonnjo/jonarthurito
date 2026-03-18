export const config = {
  user: 'home',
  host: 'jonarthurito.tech',
  prompt() {
    return `${this.user}@${this.host}`;
  }
};
