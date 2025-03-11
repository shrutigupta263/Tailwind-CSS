declare var Chart: any;

document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("salesChart") as HTMLCanvasElement;

    if (ctx) {
        new Chart(ctx, {
            type: "bar",
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [{
                    label: "Sales",
                    data: [1500, 6000, 3500, 2000, 1200, 4800, 5700, 1300, 3200, 5600, 2900, 1400],
                    backgroundColor: "#1F2937",
                    borderRadius: 5
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,  // Allows you to control height
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 7000, // Adjust this value to control y-axis height
                        ticks: {
                            stepSize: 1000 // Controls the gap between y-axis labels
                        }
                    }
                }
            }
        });
    }
 });


    document.querySelectorAll(".nav-btn").forEach(button => {
        button.addEventListener("click", (event) => {
            const target = (event.target as HTMLElement).getAttribute("data-target");
            document.querySelectorAll(".content").forEach(section => {
                (section as HTMLElement).classList.add("hidden");
            });
            document.getElementById(target!)?.classList.remove("hidden");
        });
    });

