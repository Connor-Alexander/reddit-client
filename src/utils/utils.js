const timeSince = (dateCreated) => {

    const difference = Date.now() - dateCreated;

    if (difference < 60000) return `${Math.ceil(difference / 1000)} seconds ago`;
    if (difference < 3600000) return `${Math.ceil(difference / 60000)} minutes ago`;
    if (difference < 86400000) return `${Math.ceil(difference / 3600000)} hours ago`;
    if (difference < 604800000) return `${Math.ceil(difference / 86400000)} days ago`;
    if (difference < 2419200000) return `${Math.ceil(difference / 604800000)} weeks ago`;
    if (difference < 29030400000) return `${Math.ceil(difference / 2419200000)} months ago`;
    return '';
}

const thousandsHelper = (a) => {
    if (!a) return 'N/A';
    if (a < 1000) return a;
    if (a < 1000000) return Math.round((a/1000) * 10) / 10 + 'k';
    return Math.round((a/1000000) * 10) / 10 + 'm'
}

export { timeSince, thousandsHelper };