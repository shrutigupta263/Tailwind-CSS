document.addEventListener("DOMContentLoaded", function () {
    var ctx = document.getElementById("salesChart");
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
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: "#374151",
                            font: { size: 14 }
                        }
                    },
                    x: {
                        ticks: {
                            color: "#374151",
                            font: { size: 14 }
                        }
                    }
                },
                plugins: {
                    legend: { display: false }
                }
            }
        });
    }
    document.querySelectorAll(".nav-btn").forEach(function (button) {
        button.addEventListener("click", function (event) {
            var _a;
            var target = event.target.getAttribute("data-target");
            document.querySelectorAll(".content").forEach(function (section) {
                section.classList.add("hidden");
            });
            (_a = document.getElementById(target)) === null || _a === void 0 ? void 0 : _a.classList.remove("hidden");
        });
    });
});
