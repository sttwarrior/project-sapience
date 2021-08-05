const pidGenerator = () => "p"+(Math.random() + 1).toString(36).substring(7)

export default (plan) => ({
    title: plan?.title || "",
    pid: pidGenerator(),
    privacy: plan?.privacy || "Public",
    buckets: [],
    tasks: [],
});
