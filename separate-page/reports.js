// ============================================
// NTT Scheduler - Reports Page with Tabulator.js
// ============================================

let table;
let allOrders = [];

// ============================================
// Initialize when DOM is loaded
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Load mock data
    allOrders = mockProductionOrders;

    // Initialize Tabulator
    initializeTable();

    // Populate filter dropdowns
    populateFilterDropdowns();

    // Attach event listeners
    attachEventListeners();

    console.log('NTT Scheduler Reports - Initialized with', allOrders.length, 'orders');
});

// ============================================
// Initialize Tabulator Table
// ============================================
function initializeTable() {
    table = new Tabulator("#ordersTable", {
        data: allOrders,
        layout: "fitColumns",
        responsiveLayout: false,
        pagination: true,
        paginationSize: 10,
        paginationSizeSelector: [10, 20, 50, 100],
        movableColumns: true,
        resizableRows: false,
        placeholder: "No orders found",
        height: "600px",

        columns: [
            {
                title: "PO Number",
                field: "po_number",
                sorter: "string",
                widthGrow: 1,
                formatter: function(cell) {
                    return `<strong>${cell.getValue()}</strong>`;
                }
            },
            {
                title: "Plant",
                field: "plant_code",
                sorter: "string",
                widthGrow: 1
            },
            {
                title: "FG Number",
                field: "fg_number",
                sorter: "string",
                widthGrow: 1,
                formatter: function(cell) {
                    return `<code>${cell.getValue()}</code>`;
                }
            },
            {
                title: "FG Description",
                field: "fg_desc",
                sorter: "string",
                widthGrow: 2
            },
            {
                title: "Quantity",
                field: "fg_qty",
                sorter: "number",
                widthGrow: 1,
                hozAlign: "right",
                formatter: function(cell) {
                    return `<strong>${cell.getValue().toLocaleString()}</strong>`;
                }
            },
            {
                title: "Process",
                field: "process_name",
                sorter: "string",
                widthGrow: 1.5
            },
            {
                title: "Machine",
                field: "machine_name",
                sorter: "string",
                widthGrow: 1.5,
                formatter: function(cell) {
                    const value = cell.getValue();
                    return value || '<span style="color: #95a5a6;">-</span>';
                }
            },
            {
                title: "Status",
                field: "status",
                sorter: "string",
                widthGrow: 1,
                formatter: function(cell) {
                    const status = cell.getValue();
                    return `<span class="status-badge status-${status}">${status}</span>`;
                }
            },
            {
                title: "Planned Start",
                field: "planned_start",
                sorter: "datetime",
                widthGrow: 1.2,
                formatter: function(cell) {
                    return formatDateTime(cell.getValue());
                }
            },
            {
                title: "Planned End",
                field: "planned_end",
                sorter: "datetime",
                widthGrow: 1.2,
                formatter: function(cell) {
                    return formatDateTime(cell.getValue());
                }
            },
            {
                title: "Actual Start",
                field: "actual_start",
                sorter: "datetime",
                widthGrow: 1.2,
                formatter: function(cell) {
                    return formatDateTime(cell.getValue());
                }
            },
            {
                title: "Actual End",
                field: "actual_end",
                sorter: "datetime",
                widthGrow: 1.2,
                formatter: function(cell) {
                    return formatDateTime(cell.getValue());
                }
            },
            {
                title: "Delivery Date",
                field: "fg_datetime",
                sorter: "datetime",
                widthGrow: 1.2,
                formatter: function(cell) {
                    return formatDateTime(cell.getValue());
                }
            }
        ],

        // Update record count when data is filtered
        dataFiltered: function(filters, rows) {
            updateRecordCount(rows.length);
        },

        // Update record count on initial load
        dataLoaded: function(data) {
            updateRecordCount(data.length);
        }
    });
}

// ============================================
// Populate filter dropdowns
// ============================================
function populateFilterDropdowns() {
    // Get unique plants
    const plants = [...new Set(allOrders.map(order => order.plant_code))].sort();
    const plantFilter = document.getElementById('plantFilter');
    plants.forEach(plant => {
        const option = document.createElement('option');
        option.value = plant;
        option.textContent = plant;
        plantFilter.appendChild(option);
    });

    // Get unique processes
    const processes = [...new Set(allOrders.map(order => order.process_name))].sort();
    const processFilter = document.getElementById('processFilter');
    processes.forEach(process => {
        const option = document.createElement('option');
        option.value = process;
        option.textContent = process;
        processFilter.appendChild(option);
    });
}

// ============================================
// Attach event listeners
// ============================================
function attachEventListeners() {
    // Apply Filters
    document.getElementById('applyFilters').addEventListener('click', applyFilters);

    // Reset Filters
    document.getElementById('resetFilters').addEventListener('click', resetFilters);

    // Export Buttons
    document.getElementById('exportExcel').addEventListener('click', () => exportData('xlsx'));
    document.getElementById('exportCSV').addEventListener('click', () => exportData('csv'));
    document.getElementById('exportPDF').addEventListener('click', () => exportData('pdf'));

    // Clear Sort
    document.getElementById('clearSort').addEventListener('click', () => {
        table.clearSort();
        showNotification('Sorting cleared', 'info');
    });

    // Clear All Filters
    document.getElementById('clearFilters').addEventListener('click', () => {
        table.clearFilter();
        resetFilters();
        showNotification('All filters cleared', 'info');
    });
}

// ============================================
// Apply custom filters
// ============================================
function applyFilters() {
    const plantFilter = document.getElementById('plantFilter').value;
    const processFilter = document.getElementById('processFilter').value;
    const statusFilter = document.getElementById('statusFilter').value;

    // Build filter array
    const filters = [];

    if (plantFilter) {
        filters.push({field: "plant_code", type: "=", value: plantFilter});
    }

    if (processFilter) {
        filters.push({field: "process_name", type: "=", value: processFilter});
    }

    if (statusFilter) {
        filters.push({field: "status", type: "=", value: statusFilter});
    }

    // Apply filters to table
    table.setFilter(filters);

    console.log('Filters applied:', {
        plant: plantFilter || 'All',
        process: processFilter || 'All',
        status: statusFilter || 'All'
    });

    showNotification('Filters applied successfully', 'success');
}

// ============================================
// Reset filters
// ============================================
function resetFilters() {
    document.getElementById('plantFilter').value = '';
    document.getElementById('processFilter').value = '';
    document.getElementById('statusFilter').value = '';

    table.clearFilter();

    console.log('Filters reset');
}

// ============================================
// Update record count badge
// ============================================
function updateRecordCount(count) {
    document.getElementById('recordCount').textContent = count;
}

// ============================================
// Format date/time
// ============================================
function formatDateTime(dateString) {
    if (!dateString) return '<span style="color: #95a5a6;">-</span>';

    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${day}/${month}/${year} ${hours}:${minutes}`;
}

// ============================================
// Export data in different formats
// ============================================
function exportData(format) {
    const timestamp = new Date().toISOString().split('T')[0];
    const filename = `NTT_Production_Orders_${timestamp}`;

    switch(format) {
        case 'xlsx':
            table.download("xlsx", `${filename}.xlsx`, {sheetName: "Production Orders"});
            showNotification('Excel file downloaded', 'success');
            break;
        case 'csv':
            table.download("csv", `${filename}.csv`);
            showNotification('CSV file downloaded', 'success');
            break;
        case 'pdf':
            table.download("pdf", `${filename}.pdf`, {
                orientation: "landscape",
                title: "NTT Production Orders Report",
                autoTable: {
                    styles: {
                        fontSize: 8,
                        cellPadding: 2
                    },
                    headStyles: {
                        fillColor: [44, 62, 80],
                        textColor: 255,
                        fontStyle: 'bold'
                    }
                }
            });
            showNotification('PDF file downloaded', 'success');
            break;
    }

    console.log(`Exported as ${format.toUpperCase()}`);
}

// ============================================
// Show notification toast
// ============================================
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `toast-notification ${type}`;

    const icon = type === 'success' ? 'fa-check-circle' :
                 type === 'error' ? 'fa-exclamation-circle' :
                 'fa-info-circle';

    notification.innerHTML = `
        <div class="d-flex align-items-center">
            <i class="fas ${icon} me-2" style="font-size: 1.2rem;"></i>
            <span>${message}</span>
        </div>
    `;

    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideIn 0.3s ease-out reverse';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ============================================
// Keyboard shortcuts
// ============================================
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + E for export Excel
    if ((e.ctrlKey || e.metaKey) && e.key === 'e') {
        e.preventDefault();
        exportData('xlsx');
    }

    // Ctrl/Cmd + R for reset filters
    if ((e.ctrlKey || e.metaKey) && e.key === 'r') {
        e.preventDefault();
        resetFilters();
    }
});

// ============================================
// Utility: Get table data (for debugging)
// ============================================
function getTableData() {
    return table.getData();
}

function getFilteredData() {
    return table.getData("active");
}

function logTableStats() {
    console.table({
        'Total Orders': table.getData().length,
        'Filtered Orders': table.getData("active").length,
        'Current Page': table.getPage(),
        'Page Size': table.getPageSize(),
        'Total Pages': table.getPageMax()
    });
}

// Make functions available in console
window.getTableData = getTableData;
window.getFilteredData = getFilteredData;
window.logTableStats = logTableStats;
window.table = table;
