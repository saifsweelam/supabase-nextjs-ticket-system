export const getPath = (path: string, tenant: string): string => {
    if (path.startsWith('/')) {
        return `/${tenant}${path}`;
    }
    return `/${tenant}/${path}`;
}

export const getPathParts = (path: string) => {
    if (!path.startsWith('/')) {
        path = `/${path}`;
    }
    const parts = path.split('/');
    return { tenant: parts[1] || '', resource: parts.slice(2).join('/') || '' };
}

export const getFullUrl = (path: string, tenant: string, url: string): URL => {
    return new URL(getPath(path, tenant), url);
}