const pidGenerator = () => "p"+(Math.random() + 1).toString(36).substring(7)

const planModule = (plan) => ({
    title: plan?.title || "",
    pid: pidGenerator(),
    privacy: plan?.privacy || "Public",
    buckets: [],
    tasks: [],
});

export default planModule