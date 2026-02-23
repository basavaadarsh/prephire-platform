export async function fetchStats() {
  await new Promise((resolve) => setTimeout(resolve, 800));
  return [
    { id: "students", title: "Students Trained", value: 10000, suffix: "+", icon: "users" },
    { id: "placement", title: "Placement Rate", value: 85, suffix: "%", icon: "award" },
    { id: "partners", title: "Partner Companies", value: 500, suffix: "+", icon: "trending" },
    { id: "rating", title: "Average Rating", value: 4.8, suffix: "/5", icon: "star" },
  ];
}
