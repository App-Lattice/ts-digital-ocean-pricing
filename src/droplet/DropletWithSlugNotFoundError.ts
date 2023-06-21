class DropletWithSlugNotFoundError extends Error {
  constructor(slug: string) {
    super(`Droplet with slug "${slug}" not found.`);
  }
}

export default DropletWithSlugNotFoundError;
