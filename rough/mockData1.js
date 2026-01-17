const MockData = {
    company: {
        name: "MANUFACTURING COMPANY LTD.",
        address: "123 Industrial Park, Production City",
        phone: "(555) 123-4567"
    },

    workOrder: {
        woNumber: "WO-PO-123412",
        priority: "CRITICAL",
        status: "in-progress",
        customerOrder: "CO-2025-4521",
        promiseDate: "28 Feb 2026",
        actualStart: "25 Nov 2025 10:11:00 AM"
    },

    product: {
        code: "FG-32D-E2334-REV03",
        description: "High-Voltage Industrial Control & Monitoring Assembly Unit (400+ components Cert)",
        quantity: 500,  // Increased from 50 to 500 for large-scale test
        uom: "EA"
    },

    scheduling: {
        startDate: "11/25/2025 10:11:00 AM",
        plannedFinish: "12/05/2025 11:59:00 PM",
        actualFinish: null
    },

    // ==================================================================
    // 85+ MATERIALS — VERY LARGE DATASET
    // ==================================================================
    materials: [
        { itemNo: 1, partNumber: "RM-STL-001", description: "Section headers (Order Information, Product Information, Scheduling): White background, dark text, bottom borderSection headers (Order Information, Product Information, Scheduling): White background, dark text, bottom borderSection headers (Order Information, Product Information, Scheduling): White background, dark text, bottom border", quantity: 1200, unit: "Pcs", status: "Issued", warehouse: "WH-A", bin: "A12-05" },
        { itemNo: 2, partNumber: "RM-ALU-002", description: "Aluminum Extrusion 6061-T6 80x80 Profile", quantity: 600, unit: "Meters", status: "Issued" },
        { itemNo: 3, partNumber: "EL-CAP-003", description: "Electrolytic Capacitor 100uF 450V Snap-in", quantity: 2500, unit: "Pcs", status: "Pending", remark: "ETA 11/28 - Supplier Delay" },
        { itemNo: 4, partNumber: "EL-RES-004", description: "Metal Film Resistor 1% 1/2W Assorted Kit", quantity: 120, unit: "Kits", status: "Issued" },
        { itemNo: 5, partNumber: "PCB-MAIN-101", description: "Main Control PCB 8-Layer FR4 Rev.C3", quantity: 520, unit: "Pcs", status: "Issued", supplier: "PCBExpress Inc." },
        { itemNo: 6, partNumber: "PCB-POWER-102", description: "Power Supply Board Rev.B", quantity: 510, unit: "Pcs", status: "Issued" },
        { itemNo: 7, partNumber: "MCU-STM32H7", description: "STM32H750VBT6 480MHz Cortex-M7", quantity: 505, unit: "Pcs", status: "Issued" },
        { itemNo: 8, partNumber: "DISPLAY-7INCH", description: "7\" TFT LCD Module 1024x600 IPS", quantity: 500, unit: "Pcs", status: "Issued" },
        { itemNo: 9, partNumber: "RELAY-OMRON-24V", description: "Omron G2R-2 24VDC DPDT Relay", quantity: 2000, unit: "Pcs", status: "Partially Issued", issuedQty: 1800 },
        { itemNo: 10, partNumber: "FUSE-10A", description: "Fast-Blow Glass Fuse 10A 250V 5x20mm", quantity: 3000, unit: "Pcs", status: "Issued" }],

    // ==================================================================
    // 45+ OPERATIONS — VERY LARGE ROUTING
    // ==================================================================
    operations: [
        { opId: "OP-010", workCenter: "Shoes Mass. Prod Line", operation: "This will ensure that the table section (i and the table itself) stays together and doesn't break across pages. The title will always appear with its corresponding table content.Incoming Inspection & Kitting", qty: 500, running: 180, status: "completed", goodQty: 500, scrapQty: 0, assignedTo: "Incoming QC Team" },
        { opId: "OP-020", workCenter: "SMT Line 1", operation: "PCB Stencil Printing & Reflow", qty: 500, running: 420, status: "in-progress", progress: "78%", assignedTo: "SMT Team A" },
        { opId: "OP-030", workCenter: "AOI Station", operation: "Automated Optical Inspection", qty: 500, running: 90, status: "planned" },
        { opId: "OP-040", workCenter: "Hand Soldering Bay", operation: "Through-Hole & Manual Soldering", qty: 500, running: 360, status: "planned" },
        { opId: "OP-050", workCenter: "CNC Area", operation: "Enclosure Fabrication - Cutting & Bending", qty: 500, running: 480, status: "planned" },
        { opId: "OP-060", workCenter: "Powder Coating", operation: "Surface Treatment - RAL7016 Coating", qty: 500, running: 300, status: "planned" },
        { opId: "OP-070", workCenter: "Wiring Station 1-4", operation: "Main Harness Assembly", qty: 500, running: 600, status: "planned" },
        { opId: "OP-080", workCenter: "Integration Line", operation: "Module Integration & Mechanical Fit", qty: 500, running: 540, status: "planned" },
        { opId: "OP-090", workCenter: "Firmware Station", operation: "Firmware Flashing v2.1.8 + Calibration", qty: 500, running: 240, status: "planned" },
        { opId: "OP-100", workCenter: "Burn-in Chamber", operation: "24-Hour Burn-in Test @ 60°C", qty: 500, running: 1440, status: "planned" },
        { opId: "OP-110", workCenter: "Final QC", operation: "Final Inspection + Safety Certification Check", qty: 500, running: 360, status: "planned", remark: "100% inspection" },
        { opId: "OP-120", workCenter: "Packaging Line", operation: "Foam Insert + Carton Packing", qty: 500, running: 180, status: "planned" }],
        

    // ==================================================================
    // 60+ MEMOS — FULL CONVERSATION HISTORY
    // ==================================================================
    memos: [
        { author: "system", timestamp: "11/01/2025 08:00:00 AM", message: "Work Order created automatically from ERP sales order CO-2025-4521" },
        { author: "sales@manager", timestamp: "11/02/2025 10:15:22 AM", message: "Customer confirmed urgent need - 500 units required by Feb 28 for plant commissioning" },
        { author: "production@director", timestamp: "11/03/2025 11:30:00 AM", message: "UPGRADED TO CRITICAL PRIORITY. All departments to expedite." },
        { author: "engineering@lead", timestamp: "11/04/2025 02:18:44 PM", message: "ECN-2025-118 applied: Updated firmware + new power relay spec" },
        { author: "purchasing@team", timestamp: "11/10/2025 09:12:00 AM", message: "Multiple component lead times extended. Capacitors now 28-day delay." },
        { author: "production@mgr", timestamp: "11/12/2025 04:45:10 PM", message: "Scheduled extended routing on Shoes Line + parallel SMT runs" },
       
    ]
};