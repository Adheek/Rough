// Mock data for process management system

const mockData = {
  processes: [
    {
      id: 1,
      name: "Process 1",
      description: "Primary manufacturing process",
      steps: [
        { id: 1, name: "Initial Setup", status: "Completed", order: 1, tooltip: "Set up workstation and gather materials", estimatedTime: "15 mins", assignee: "John Doe" },
        { id: 2, name: "Material Inspection", status: "Completed", order: 2, tooltip: "Inspect raw materials for quality", estimatedTime: "10 mins", assignee: "Jane Smith" },
        { id: 3, name: "Pre-processing", status: "In Progress", order: 3, tooltip: "Prepare materials for main process", estimatedTime: "20 mins", assignee: "John Doe" },
        { id: 4, name: "Assembly Phase 1", status: "Pending", order: 4, tooltip: "Begin first assembly stage", estimatedTime: "30 mins", assignee: "Mike Johnson" },
        { id: 5, name: "Quality Check 1", status: "Pending", order: 5, tooltip: "First quality inspection point", estimatedTime: "15 mins", assignee: "Sarah Wilson" },
        { id: 6, name: "Assembly Phase 2", status: "Pending", order: 6, tooltip: "Second assembly stage", estimatedTime: "30 mins", assignee: "Mike Johnson" },
        { id: 7, name: "Heat Treatment", status: "Pending", order: 7, tooltip: "Apply heat treatment process", estimatedTime: "45 mins", assignee: "David Brown" },
        { id: 8, name: "Cooling Period", status: "Pending", order: 8, tooltip: "Allow materials to cool", estimatedTime: "60 mins", assignee: "System" },
        { id: 9, name: "Surface Finishing", status: "Pending", order: 9, tooltip: "Apply surface finish", estimatedTime: "25 mins", assignee: "Emily Davis" },
        { id: 10, name: "Quality Check 2", status: "Pending", order: 10, tooltip: "Second quality inspection", estimatedTime: "15 mins", assignee: "Sarah Wilson" },
        { id: 11, name: "Packaging Prep", status: "Pending", order: 11, tooltip: "Prepare for packaging", estimatedTime: "10 mins", assignee: "Tom Harris" },
        { id: 12, name: "Final Packaging", status: "Pending", order: 12, tooltip: "Complete packaging", estimatedTime: "20 mins", assignee: "Tom Harris" },
        { id: 13, name: "Label Application", status: "Pending", order: 13, tooltip: "Apply product labels", estimatedTime: "5 mins", assignee: "Anna Lee" },
        { id: 14, name: "Barcode Scanning", status: "Pending", order: 14, tooltip: "Scan and register barcodes", estimatedTime: "5 mins", assignee: "System" },
        { id: 15, name: "Final Inspection", status: "Pending", order: 15, tooltip: "Final quality check before shipment", estimatedTime: "20 mins", assignee: "Sarah Wilson" }
      ]
    },
    {
      id: 2,
      name: "Process 2",
      description: "Secondary quality assurance process",
      steps: [
        { id: 16, name: "Receiving Inspection", status: "Completed", order: 1, tooltip: "Initial receiving quality check", estimatedTime: "10 mins", assignee: "Quality Team" },
        { id: 17, name: "Documentation Review", status: "Completed", order: 2, tooltip: "Review all process documentation", estimatedTime: "15 mins", assignee: "Admin Team" },
        { id: 18, name: "Sample Selection", status: "In Progress", order: 3, tooltip: "Select samples for testing", estimatedTime: "10 mins", assignee: "QA Lead" },
        { id: 19, name: "Visual Inspection", status: "Pending", order: 4, tooltip: "Perform visual quality check", estimatedTime: "20 mins", assignee: "Inspector 1" },
        { id: 20, name: "Dimensional Check", status: "Pending", order: 5, tooltip: "Verify dimensions within spec", estimatedTime: "25 mins", assignee: "Inspector 2" },
        { id: 21, name: "Material Testing", status: "Pending", order: 6, tooltip: "Conduct material composition tests", estimatedTime: "40 mins", assignee: "Lab Tech" },
        { id: 22, name: "Stress Testing", status: "Pending", order: 7, tooltip: "Perform stress and load tests", estimatedTime: "30 mins", assignee: "Test Engineer" },
        { id: 23, name: "Results Documentation", status: "Pending", order: 8, tooltip: "Document all test results", estimatedTime: "15 mins", assignee: "QA Admin" },
        { id: 24, name: "Compliance Check", status: "Pending", order: 9, tooltip: "Verify regulatory compliance", estimatedTime: "20 mins", assignee: "Compliance Officer" },
        { id: 25, name: "Final Approval", status: "Pending", order: 10, tooltip: "Management approval for release", estimatedTime: "10 mins", assignee: "QA Manager" }
      ]
    },
    {
      id: 3,
      name: "Process 3",
      description: "Advanced testing and validation",
      steps: [
        { id: 26, name: "Test Environment Setup", status: "Completed", order: 1, tooltip: "Configure testing environment", estimatedTime: "30 mins", assignee: "Setup Team" },
        { id: 27, name: "Calibration", status: "In Progress", order: 2, tooltip: "Calibrate all testing equipment", estimatedTime: "20 mins", assignee: "Technician" },
        { id: 28, name: "Baseline Measurement", status: "Pending", order: 3, tooltip: "Take baseline measurements", estimatedTime: "15 mins", assignee: "Analyst" },
        { id: 29, name: "Performance Test 1", status: "Pending", order: 4, tooltip: "First performance benchmark", estimatedTime: "45 mins", assignee: "Test Lead" },
        { id: 30, name: "Data Collection", status: "Pending", order: 5, tooltip: "Collect performance data", estimatedTime: "10 mins", assignee: "System" },
        { id: 31, name: "Performance Test 2", status: "Pending", order: 6, tooltip: "Second performance benchmark", estimatedTime: "45 mins", assignee: "Test Lead" },
        { id: 32, name: "Endurance Testing", status: "Pending", order: 7, tooltip: "Long-term endurance test", estimatedTime: "120 mins", assignee: "Test Engineer" },
        { id: 33, name: "Environmental Testing", status: "Pending", order: 8, tooltip: "Test under various conditions", estimatedTime: "60 mins", assignee: "Env Specialist" },
        { id: 34, name: "Data Analysis", status: "Pending", order: 9, tooltip: "Analyze all collected data", estimatedTime: "40 mins", assignee: "Data Analyst" },
        { id: 35, name: "Report Generation", status: "Pending", order: 10, tooltip: "Generate comprehensive report", estimatedTime: "30 mins", assignee: "Report Team" },
        { id: 36, name: "Peer Review", status: "Pending", order: 11, tooltip: "Technical peer review", estimatedTime: "25 mins", assignee: "Senior Engineer" },
        { id: 37, name: "Validation Complete", status: "Pending", order: 12, tooltip: "Final validation sign-off", estimatedTime: "10 mins", assignee: "Validation Lead" }
      ]
    },
    {
      id: 4,
      name: "Process 4",
      description: "Extended workflow demonstration with 50 steps",
      steps: Array.from({ length: 50 }, (_, i) => ({
        id: 38 + i,
        name: `Step ${i + 1}`,
        status: i < 3 ? "Completed" : i < 5 ? "In Progress" : "Pending",
        order: i + 1,
        tooltip: `This is step ${i + 1} of the extended process workflow. Contains detailed instructions and requirements.`,
        estimatedTime: `${Math.floor(Math.random() * 60) + 10} mins`,
        assignee: ["Team A", "Team B", "Team C", "System", "Manager"][Math.floor(Math.random() * 5)]
      }))
    }
  ]
};

// Status color mappings
const statusColors = {
  "Completed": "#10b981",
  "In Progress": "#3b82f6",
  "Pending": "#6b7280",
  "Blocked": "#ef4444"
};

// Export for use in HTML
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { mockData, statusColors };
}