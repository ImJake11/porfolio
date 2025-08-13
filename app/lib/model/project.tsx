


export interface ProjectDetails {
    title: string,
    coverImage: string,
    description: string,
    techs: string[],
    features: Features[],
    repo: string,
    live: string,
}

export interface Features {
    snapshots?: string[],
    snapshotTitle?: string[],
    title: string,
    description?: string,
    grid?: string,
}