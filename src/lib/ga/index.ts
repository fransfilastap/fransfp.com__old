export const pageview = (url: string) => {
    window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        page_path: url,
    });
};

export const event = (action: string, label: string) => {
    window.gtag("event", action, {
        event_category: "User",
        event_label: label,
    });
}