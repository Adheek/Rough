// Default status flow (used if statusFlow is not specified in work order)
const allStatusSteps = ['TO DO', 'WIP', 'HOLD', 'QA', 'Done'];

// Helper function to generate 100 manufacturing steps with random statuses
function generate100StepsWithStatus() {
    const steps = [];
    for (let i = 1; i <= 100; i++) {
        let status;
        if (i <= 45) {
            // First 45 are randomly completed or in-progress
            status = Math.random() > 0.3 ? 'completed' : 'in-progress';
        } else if (i <= 55) {
            // Next 10 are in-progress
            status = 'in-progress';
        } else {
            // Rest are pending
            status = 'pending';
        }
        
        steps.push({
            name: `Step ${i}`,
            status: status
        });
    }
    
    // Shuffle completed ones to make it non-sequential
    for (let i = 0; i < 30; i++) {
        const idx1 = Math.floor(Math.random() * 45);
        const idx2 = Math.floor(Math.random() * 45);
        [steps[idx1].status, steps[idx2].status] = [steps[idx2].status, steps[idx1].status];
    }
    
    return steps;
}

const workOrders = [
    {
        id: "1234 (098761111_pbr_2)",
        assignedOperator: "Karthikeyan, adheek, preethi, dhinesh, khaled, preethi, immanuel, admin",
        completionDate: "28 Nov 2025",
        quantity: "10 (Uom1)",
        poInitial: "098761111",
        actualQuantity: "10 (Uom1) ✓",
        plannedStart: "25 Nov 2025 09:00",
        plannedEnd: "25 Nov 2025 10:10",
        productMemo: "",
        statusFlow: Array.from({length: 100}, (_, i) => `Step ${i + 1}`),
        statusDetails: generate100StepsWithStatus()
    },
    {
        id: "FG-32D-E2334 (Po - 123412_pbr_2)",
        assignedOperator: "Karthikeyan, adheek, preethi, dhinesh, khaled, preethi, immanuel, admin",
        completionDate: "26 Feb 2026",
        quantity: "90 (Uom1)",
        poInitial: "Po - 123412",
        actualQuantity: "50 (Uom1) ✓",
        plannedStart: "25 Nov 2025 09:00",
        plannedEnd: "26 Nov 2025 06:10",
        productMemo: "",
        statusFlow: ['Order', 'Design', 'Material', 'Cut', 'Sew', 'Quality', 'Pack', 'Ship', 'Deliver', 'Complete'],
        statusDetails: [
            { name: 'Order', status: 'completed' },
            { name: 'Design', status: 'completed' },
            { name: 'Material', status: 'in-progress' },
            { name: 'Cut', status: 'completed' }, // Non-sequential: Cut done before Material
            { name: 'Sew', status: 'in-progress' },
            { name: 'Quality', status: 'pending' },
            { name: 'Pack', status: 'pending' },
            { name: 'Ship', status: 'pending' },
            { name: 'Deliver', status: 'pending' },
            { name: 'Complete', status: 'pending' }
        ]
    },
    {
        id: "Computer (18075524)",
        assignedOperator: "Karthikeyan, adheek, preethi, dhinesh, khaled, preethi, immanuel, admin",
        completionDate: "29 Nov 2025",
        quantity: "1179 (Uom1)",
        poInitial: "18075524",
        actualQuantity: "1179 (Uom1) ✓",
        plannedStart: "28 Nov 2025 02:09",
        plannedEnd: "03 Dec 2025 12:03",
        productMemo: "[11/28/2025 9:14:58 AM] draft1@instance: work carefully",
        statusFlow: [
            'Planning', 'Raw Material', 'Cutting', 'Drilling', 'Grinding', 'Milling', 
            'Turning', 'Welding', 'Assembly', 'Testing', 'Painting', 'Packaging', 
            'Quality Check', 'Storage', 'Shipping', 'Delivered'
        ],
        statusDetails: [
            { name: 'Planning', status: 'completed' },
            { name: 'Raw Material', status: 'completed' },
            { name: 'Cutting', status: 'completed' },
            { name: 'Drilling', status: 'in-progress' },
            { name: 'Grinding', status: 'completed' }, // Done before Drilling finished
            { name: 'Milling', status: 'in-progress' },
            { name: 'Turning', status: 'pending' },
            { name: 'Welding', status: 'completed' }, // Done out of order
            { name: 'Assembly', status: 'in-progress' },
            { name: 'Testing', status: 'pending' },
            { name: 'Painting', status: 'pending' },
            { name: 'Packaging', status: 'pending' },
            { name: 'Quality Check', status: 'pending' },
            { name: 'Storage', status: 'pending' },
            { name: 'Shipping', status: 'pending' },
            { name: 'Delivered', status: 'pending' }
        ]
    },
    {
        id: "1128 (demo1_pbr_2)",
        assignedOperator: "Karthikeyan, adheek, preethi, dhinesh, khaled, preethi, immanuel, admin",
        completionDate: "18 Dec 2025",
        quantity: "10 (Uom1)",
        poInitial: "demo1",
        actualQuantity: "10 (Uom1) ✓",
        plannedStart: "12 Dec 2025 12:00",
        plannedEnd: "12 Dec 2025 07:36",
        productMemo: "",
        statusFlow: ['Draft', 'Review', 'Approve', 'Deploy', 'Live', 'Done'],
        statusDetails: [
            { name: 'Draft', status: 'completed' },
            { name: 'Review', status: 'in-progress' },
            { name: 'Approve', status: 'pending' },
            { name: 'Deploy', status: 'pending' },
            { name: 'Live', status: 'pending' },
            { name: 'Done', status: 'pending' }
        ]
    },
    {
        id: "FG-32D-E2334 (Po - 123412check_pbr_2)",
        assignedOperator: "Karthikeyan, adheek, preethi, dhinesh, khaled, preethi, immanuel, admin",
        completionDate: "21 Nov 2025",
        quantity: "50 (Uom1)",
        poInitial: "Po - 123412check",
        actualQuantity: "50 (Uom1) ✓",
        plannedStart: "20 Nov 2025 09:00",
        plannedEnd: "21 Nov 2025 06:10",
        productMemo: "",
        statusFlow: [
            'Init', 'Prep', 'Comp1', 'Comp2', 'Comp3', 'Comp4', 'Comp5', 
            'Assy1', 'Assy2', 'Assy3', 'Test1', 'Test2', 'Test3', 
            'QC1', 'QC2', 'QC3', 'QC4', 'Final', 'Pack', 'Ship', 'Done'
        ],
        statusDetails: [
            { name: 'Init', status: 'completed' },
            { name: 'Prep', status: 'completed' },
            { name: 'Comp1', status: 'completed' },
            { name: 'Comp2', status: 'in-progress' },
            { name: 'Comp3', status: 'completed' }, // Done out of order
            { name: 'Comp4', status: 'in-progress' },
            { name: 'Comp5', status: 'pending' },
            { name: 'Assy1', status: 'completed' }, // Assembly started before all components done
            { name: 'Assy2', status: 'in-progress' },
            { name: 'Assy3', status: 'pending' },
            { name: 'Test1', status: 'completed' },
            { name: 'Test2', status: 'pending' },
            { name: 'Test3', status: 'pending' },
            { name: 'QC1', status: 'pending' },
            { name: 'QC2', status: 'pending' },
            { name: 'QC3', status: 'pending' },
            { name: 'QC4', status: 'pending' },
            { name: 'Final', status: 'pending' },
            { name: 'Pack', status: 'pending' },
            { name: 'Ship', status: 'pending' },
            { name: 'Done', status: 'pending' }
        ]
    },
    {
        id: "1234 (11111111)",
        assignedOperator: "Karthikeyan, adheek, preethi, dhinesh, khaled, preethi, immanuel, admin",
        completionDate: "16 Dec 2025",
        quantity: "10 (Uom1)",
        poInitial: "11111111",
        actualQuantity: "10 (Uom1) ✓",
        plannedStart: "12 Dec 2025 09:00",
        plannedEnd: "16 Dec 2025 10:10",
        productMemo: "",
        statusFlow: ['New', 'In Progress', 'Complete'],
        statusDetails: [
            { name: 'New', status: 'completed' },
            { name: 'In Progress', status: 'in-progress' },
            { name: 'Complete', status: 'pending' }
        ]
    },
    {
        id: "1234 (11111111_pbr_2)",
        assignedOperator: "Karthikeyan, adheek, preethi, dhinesh, khaled, preethi, immanuel, admin",
        completionDate: "16 Dec 2025",
        quantity: "10 (Uom1)",
        poInitial: "11111111_pbr_2",
        actualQuantity: "10 (Uom1) ✓",
        plannedStart: "12 Dec 2025 09:00",
        plannedEnd: "16 Dec 2025 10:10",
        productMemo: "",
        statusFlow: Array.from({length: 100}, (_, i) => `Step ${i + 1}`),
        statusDetails: generate100StepsWithStatus()
    },
    {
        id: "1234 (11111111_pbr_3)",
        assignedOperator: "Karthikeyan, adheek, preethi, dhinesh, khaled, preethi, immanuel, admin",
        completionDate: "16 Dec 2025",
        quantity: "10 (Uom1)",
        poInitial: "11111111_pbr_3",
        actualQuantity: "10 (Uom1) ✓",
        plannedStart: "12 Dec 2025 09:00",
        plannedEnd: "16 Dec 2025 10:10",
        productMemo: "",
        statusFlow: ['Order', 'Pack', 'Shipped', 'Delivered'],
        statusDetails: [
            { name: 'Order', status: 'completed' },
            { name: 'Pack', status: 'completed' },
            { name: 'Shipped', status: 'in-progress' },
            { name: 'Delivered', status: 'pending' }
        ]
    }
];