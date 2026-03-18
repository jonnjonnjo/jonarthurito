export const config = {
  user: 'home',
  host: 'jon',
  prompt() {
    return `${this.user}@${this.host}`;
  }
};
