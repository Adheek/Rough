// Mock data for machines, tasks, and operator assignments
const machineData = [
    {
        date: '2025-12-05',
        machineId: 'M-001',
        machineName: 'CNC Milling Machine A',
        location: 'Zone A - Floor 1',
        status: 'Active',
        manufacturer: 'Haas Automation',
        model: 'VF-4SS',
        serialNumber: 'HA-2021-0045',
        installDate: '2021-03-15',
        capacity: '40 taper, 10,000 RPM',
        lastMaintenance: '2025-11-28',
        nextMaintenance: '2025-12-28',
        tasks: [
            {
                taskName: 'Precision Component Machining',
                operator: 'John Smith',
                operatorId: 'EMP-1001',
                experience: '8 years',
                shift: 'Morning Shift (7:00 AM - 3:00 PM)',
                contact: 'j.smith@nttdata.com',
                phoneExt: 'x2101',
                timeSlot: '08:00 - 12:00',
                breakTime: '10:00 - 10:15',
                totalHours: 4,
                certification: 'CNC Level III Certified'
            },
            {
                taskName: 'Quality Inspection Check',
                operator: 'Sarah Johnson',
                operatorId: 'EMP-1005',
                experience: '5 years',
                shift: 'Afternoon Shift (1:00 PM - 9:00 PM)',
                contact: 's.johnson@nttdata.com',
                phoneExt: 'x2105',
                timeSlot: '13:00 - 15:00',
                breakTime: '14:00 - 14:15',
                totalHours: 2,
                certification: 'Quality Assurance Specialist'
            },
            {
                taskName: 'Tool Calibration',
                operator: 'Michael Chen',
                operatorId: 'EMP-1012',
                experience: '12 years',
                shift: 'Afternoon Shift (1:00 PM - 9:00 PM)',
                contact: 'm.chen@nttdata.com',
                phoneExt: 'x2112',
                timeSlot: '15:30 - 17:00',
                breakTime: '16:15 - 16:30',
                totalHours: 1.5,
                certification: 'Master Technician'
            }
        ]
    },
    {
        date: '2025-12-05',
        machineId: 'M-002',
        machineName: 'Laser Cutting System',
        location: 'Zone B - Floor 1',
        status: 'Active',
        manufacturer: 'Trumpf',
        model: 'TruLaser 3030',
        serialNumber: 'TF-2020-0892',
        installDate: '2020-07-22',
        capacity: '4000W, 1500x3000mm bed',
        lastMaintenance: '2025-11-15',
        nextMaintenance: '2025-12-15',
        tasks: [
            {
                taskName: 'Sheet Metal Cutting - Batch 204',
                operator: 'Emily Davis',
                operatorId: 'EMP-1008',
                experience: '6 years',
                shift: 'Morning Shift (7:00 AM - 3:00 PM)',
                contact: 'e.davis@nttdata.com',
                phoneExt: 'x2108',
                timeSlot: '07:00 - 11:00',
                breakTime: '09:00 - 09:15',
                totalHours: 4,
                certification: 'Laser Operator Level II'
            },
            {
                taskName: 'Pattern Programming',
                operator: 'David Wilson',
                operatorId: 'EMP-1015',
                experience: '10 years',
                shift: 'Morning Shift (7:00 AM - 3:00 PM)',
                contact: 'd.wilson@nttdata.com',
                phoneExt: 'x2115',
                timeSlot: '11:30 - 14:00',
                breakTime: '12:30 - 13:00',
                totalHours: 2.5,
                certification: 'CAD/CAM Specialist'
            }
        ]
    },
    {
        date: '2025-12-05',
        machineId: 'M-003',
        machineName: 'Hydraulic Press',
        location: 'Zone A - Floor 2',
        status: 'Active',
        manufacturer: 'Schuler',
        model: 'HPM 500',
        serialNumber: 'SC-2019-1234',
        installDate: '2019-11-10',
        capacity: '500 tons, 800x800mm bed',
        lastMaintenance: '2025-11-20',
        nextMaintenance: '2025-12-20',
        tasks: [
            {
                taskName: 'Metal Forming - Project X',
                operator: 'Robert Martinez',
                operatorId: 'EMP-1018',
                experience: '15 years',
                shift: 'Morning Shift (7:00 AM - 3:00 PM)',
                contact: 'r.martinez@nttdata.com',
                phoneExt: 'x2118',
                timeSlot: '08:00 - 16:00',
                breakTime: '12:00 - 12:45',
                totalHours: 8,
                certification: 'Hydraulic Press Master'
            }
        ]
    },
    {
        date: '2025-12-05',
        machineId: 'M-004',
        machineName: 'Assembly Line Robot',
        location: 'Zone C - Floor 1',
        status: 'Idle',
        manufacturer: 'ABB Robotics',
        model: 'IRB 6700',
        serialNumber: 'ABB-2022-5678',
        installDate: '2022-01-18',
        capacity: '200kg payload, 2.8m reach',
        lastMaintenance: '2025-12-01',
        nextMaintenance: '2026-01-01',
        tasks: [
            {
                taskName: 'Routine Maintenance',
                operator: 'Lisa Anderson',
                operatorId: 'EMP-1022',
                experience: '7 years',
                shift: 'Morning Shift (7:00 AM - 3:00 PM)',
                contact: 'l.anderson@nttdata.com',
                phoneExt: 'x2122',
                timeSlot: '09:00 - 12:00',
                breakTime: '10:30 - 10:45',
                totalHours: 3,
                certification: 'Robotics Technician Level II'
            }
        ]
    },
    {
        date: '2025-12-05',
        machineId: 'M-005',
        machineName: 'Injection Molding Machine',
        location: 'Zone B - Floor 2',
        status: 'Active',
        manufacturer: 'Engel',
        model: 'e-victory 330',
        serialNumber: 'EG-2020-9876',
        installDate: '2020-09-05',
        capacity: '330 tons, 850g shot size',
        lastMaintenance: '2025-11-10',
        nextMaintenance: '2025-12-10',
        tasks: [
            {
                taskName: 'Plastic Parts Production - Batch 189',
                operator: 'James Taylor',
                operatorId: 'EMP-1025',
                experience: '9 years',
                shift: 'Night Shift (10:00 PM - 6:00 AM)',
                contact: 'j.taylor@nttdata.com',
                phoneExt: 'x2125',
                timeSlot: '06:00 - 14:00',
                breakTime: '10:00 - 10:30',
                totalHours: 8,
                certification: 'Injection Molding Specialist'
            },
            {
                taskName: 'Mold Change & Setup',
                operator: 'Jennifer White',
                operatorId: 'EMP-1028',
                experience: '11 years',
                shift: 'Afternoon Shift (1:00 PM - 9:00 PM)',
                contact: 'j.white@nttdata.com',
                phoneExt: 'x2128',
                timeSlot: '14:30 - 18:00',
                breakTime: '16:00 - 16:15',
                totalHours: 3.5,
                certification: 'Mold Setup Expert'
            }
        ]
    },
    {
        date: '2025-12-05',
        machineId: 'M-006',
        machineName: '3D Printer Station',
        location: 'Zone D - Floor 1',
        status: 'Active',
        manufacturer: 'Stratasys',
        model: 'F900',
        serialNumber: 'ST-2023-3456',
        installDate: '2023-04-12',
        capacity: '914x610x914mm build volume',
        lastMaintenance: '2025-11-25',
        nextMaintenance: '2025-12-25',
        tasks: [
            {
                taskName: 'Prototype Printing - Design V3',
                operator: 'Christopher Brown',
                operatorId: 'EMP-1030',
                experience: '4 years',
                shift: 'Morning Shift (7:00 AM - 3:00 PM)',
                contact: 'c.brown@nttdata.com',
                phoneExt: 'x2130',
                timeSlot: '08:00 - 18:00',
                breakTime: '12:00 - 13:00',
                totalHours: 10,
                certification: 'Additive Manufacturing Technician'
            }
        ]
    },
    {
        date: '2025-12-05',
        machineId: 'M-007',
        machineName: 'Welding Robot Station',
        location: 'Zone A - Floor 3',
        status: 'Active',
        manufacturer: 'KUKA',
        model: 'KR 16 R2010',
        serialNumber: 'KK-2021-7890',
        installDate: '2021-06-20',
        capacity: '16kg payload, 2010mm reach',
        lastMaintenance: '2025-11-18',
        nextMaintenance: '2025-12-18',
        tasks: [
            {
                taskName: 'Automotive Frame Welding',
                operator: 'Marcus Williams',
                operatorId: 'EMP-1033',
                experience: '13 years',
                shift: 'Morning Shift (7:00 AM - 3:00 PM)',
                contact: 'm.williams@nttdata.com',
                phoneExt: 'x2133',
                timeSlot: '07:00 - 15:00',
                breakTime: '11:00 - 11:30',
                totalHours: 8,
                certification: 'Certified Welding Inspector'
            },
            {
                taskName: 'Robot Path Programming',
                operator: 'Patricia Miller',
                operatorId: 'EMP-1034',
                experience: '6 years',
                shift: 'Afternoon Shift (1:00 PM - 9:00 PM)',
                contact: 'p.miller@nttdata.com',
                phoneExt: 'x2134',
                timeSlot: '15:30 - 17:30',
                breakTime: '16:30 - 16:45',
                totalHours: 2,
                certification: 'Robotics Programmer'
            }
        ]
    },
    {
        date: '2025-12-05',
        machineId: 'M-008',
        machineName: 'CNC Lathe Machine B',
        location: 'Zone B - Floor 3',
        status: 'Active',
        manufacturer: 'Mazak',
        model: 'QUICK TURN NEXUS 250-II',
        serialNumber: 'MZ-2020-4567',
        installDate: '2020-03-11',
        capacity: '8" chuck, 2500 RPM',
        lastMaintenance: '2025-11-22',
        nextMaintenance: '2025-12-22',
        tasks: [
            {
                taskName: 'Shaft Manufacturing - Batch 456',
                operator: 'Daniel Garcia',
                operatorId: 'EMP-1036',
                experience: '10 years',
                shift: 'Morning Shift (7:00 AM - 3:00 PM)',
                contact: 'd.garcia@nttdata.com',
                phoneExt: 'x2136',
                timeSlot: '06:00 - 14:00',
                breakTime: '10:00 - 10:30',
                totalHours: 8,
                certification: 'CNC Lathe Specialist'
            }
        ]
    },
    {
        date: '2025-12-05',
        machineId: 'M-009',
        machineName: 'Paint Booth Automated',
        location: 'Zone C - Floor 2',
        status: 'Active',
        manufacturer: 'Dürr',
        model: 'EcoRP E043i',
        serialNumber: 'DR-2022-8901',
        installDate: '2022-08-15',
        capacity: '4x3x2.5m booth size',
        lastMaintenance: '2025-11-30',
        nextMaintenance: '2025-12-30',
        tasks: [
            {
                taskName: 'Surface Coating - Product Line A',
                operator: 'Angela Martinez',
                operatorId: 'EMP-1038',
                experience: '7 years',
                shift: 'Morning Shift (7:00 AM - 3:00 PM)',
                contact: 'a.martinez@nttdata.com',
                phoneExt: 'x2138',
                timeSlot: '08:00 - 12:00',
                breakTime: '10:00 - 10:15',
                totalHours: 4,
                certification: 'Industrial Coating Technician'
            },
            {
                taskName: 'Quality Control Inspection',
                operator: 'Kevin Thompson',
                operatorId: 'EMP-1039',
                experience: '5 years',
                shift: 'Afternoon Shift (1:00 PM - 9:00 PM)',
                contact: 'k.thompson@nttdata.com',
                phoneExt: 'x2139',
                timeSlot: '13:00 - 15:00',
                breakTime: '14:00 - 14:15',
                totalHours: 2,
                certification: 'QC Inspector Level II'
            }
        ]
    },
    {
        date: '2025-12-05',
        machineId: 'M-010',
        machineName: 'Metal Stamping Press',
        location: 'Zone D - Floor 2',
        status: 'Active',
        manufacturer: 'Aida',
        model: 'DSF-M2-6000',
        serialNumber: 'AD-2019-2345',
        installDate: '2019-05-22',
        capacity: '600 tons, 1400x900mm bed',
        lastMaintenance: '2025-11-12',
        nextMaintenance: '2025-12-12',
        tasks: [
            {
                taskName: 'Metal Stamping - Chassis Parts',
                operator: 'Brian Lee',
                operatorId: 'EMP-1041',
                experience: '14 years',
                shift: 'Morning Shift (7:00 AM - 3:00 PM)',
                contact: 'b.lee@nttdata.com',
                phoneExt: 'x2141',
                timeSlot: '07:00 - 15:00',
                breakTime: '11:00 - 11:30',
                totalHours: 8,
                certification: 'Press Operator Master'
            }
        ]
    },
    {
        date: '2025-12-05',
        machineId: 'M-011',
        machineName: 'Grinding Machine Station',
        location: 'Zone A - Floor 1',
        status: 'Active',
        manufacturer: 'Studer',
        model: 'S33',
        serialNumber: 'ST-2021-6789',
        installDate: '2021-09-08',
        capacity: 'Ø 300 x 600mm',
        lastMaintenance: '2025-11-20',
        nextMaintenance: '2025-12-20',
        tasks: [
            {
                taskName: 'Precision Grinding - Bearings',
                operator: 'Rachel Kim',
                operatorId: 'EMP-1043',
                experience: '9 years',
                shift: 'Morning Shift (7:00 AM - 3:00 PM)',
                contact: 'r.kim@nttdata.com',
                phoneExt: 'x2143',
                timeSlot: '08:00 - 16:00',
                breakTime: '12:00 - 12:30',
                totalHours: 8,
                certification: 'Grinding Specialist'
            }
        ]
    },
    {
        date: '2025-12-05',
        machineId: 'M-012',
        machineName: 'EDM Wire Cutting Machine',
        location: 'Zone B - Floor 1',
        status: 'Active',
        manufacturer: 'Mitsubishi',
        model: 'MV2400R',
        serialNumber: 'MT-2022-3456',
        installDate: '2022-02-14',
        capacity: '400x300x220mm work area',
        lastMaintenance: '2025-11-28',
        nextMaintenance: '2025-12-28',
        tasks: [
            {
                taskName: 'Wire EDM - Mold Components',
                operator: 'Steven Park',
                operatorId: 'EMP-1045',
                experience: '11 years',
                shift: 'Morning Shift (7:00 AM - 3:00 PM)',
                contact: 's.park@nttdata.com',
                phoneExt: 'x2145',
                timeSlot: '07:00 - 14:00',
                breakTime: '10:30 - 11:00',
                totalHours: 7,
                certification: 'EDM Machinist'
            },
            {
                taskName: 'Electrode Setup',
                operator: 'Nicole Rodriguez',
                operatorId: 'EMP-1046',
                experience: '6 years',
                shift: 'Afternoon Shift (1:00 PM - 9:00 PM)',
                contact: 'n.rodriguez@nttdata.com',
                phoneExt: 'x2146',
                timeSlot: '14:30 - 16:30',
                breakTime: '15:30 - 15:45',
                totalHours: 2,
                certification: 'EDM Setup Technician'
            }
        ]
    },
    {
        date: '2025-12-05',
        machineId: 'M-013',
        machineName: 'Automated Packaging Line',
        location: 'Zone C - Floor 3',
        status: 'Active',
        manufacturer: 'Bosch Rexroth',
        model: 'APS 800',
        serialNumber: 'BR-2023-7890',
        installDate: '2023-01-10',
        capacity: '80 units/min',
        lastMaintenance: '2025-12-01',
        nextMaintenance: '2026-01-01',
        tasks: [
            {
                taskName: 'Packaging Operations - Product Line C',
                operator: 'Thomas Wright',
                operatorId: 'EMP-1048',
                experience: '4 years',
                shift: 'Morning Shift (7:00 AM - 3:00 PM)',
                contact: 't.wright@nttdata.com',
                phoneExt: 'x2148',
                timeSlot: '07:00 - 15:00',
                breakTime: '11:00 - 11:30',
                totalHours: 8,
                certification: 'Packaging Line Operator'
            }
        ]
    },
    {
        date: '2025-12-05',
        machineId: 'M-014',
        machineName: 'Heat Treatment Furnace',
        location: 'Zone D - Floor 3',
        status: 'Idle',
        manufacturer: 'Ipsen',
        model: 'Turbo Treater',
        serialNumber: 'IP-2020-5678',
        installDate: '2020-11-05',
        capacity: '1200°C max, 500kg capacity',
        lastMaintenance: '2025-11-25',
        nextMaintenance: '2025-12-25',
        tasks: [
            {
                taskName: 'Furnace Calibration',
                operator: 'Michelle Harris',
                operatorId: 'EMP-1050',
                experience: '8 years',
                shift: 'Morning Shift (7:00 AM - 3:00 PM)',
                contact: 'm.harris@nttdata.com',
                phoneExt: 'x2150',
                timeSlot: '09:00 - 11:00',
                breakTime: '10:00 - 10:15',
                totalHours: 2,
                certification: 'Heat Treatment Specialist'
            }
        ]
    },
    {
        date: '2025-12-05',
        machineId: 'M-015',
        machineName: 'Sheet Metal Bending Machine',
        location: 'Zone A - Floor 2',
        status: 'Active',
        manufacturer: 'Amada',
        model: 'HG 1003 ATC',
        serialNumber: 'AM-2021-9012',
        installDate: '2021-07-18',
        capacity: '100 ton, 3000mm length',
        lastMaintenance: '2025-11-15',
        nextMaintenance: '2025-12-15',
        tasks: [
            {
                taskName: 'Enclosure Bending - Order 678',
                operator: 'Andrew Clark',
                operatorId: 'EMP-1052',
                experience: '12 years',
                shift: 'Morning Shift (7:00 AM - 3:00 PM)',
                contact: 'a.clark@nttdata.com',
                phoneExt: 'x2152',
                timeSlot: '08:00 - 16:00',
                breakTime: '12:00 - 12:45',
                totalHours: 8,
                certification: 'Press Brake Operator'
            }
        ]
    },
    // Previous date data
    {
        date: '2025-12-04',
        machineId: 'M-001',
        machineName: 'CNC Milling Machine A',
        location: 'Zone A - Floor 1',
        status: 'Active',
        manufacturer: 'Haas Automation',
        model: 'VF-4SS',
        serialNumber: 'HA-2021-0045',
        installDate: '2021-03-15',
        capacity: '40 taper, 10,000 RPM',
        lastMaintenance: '2025-11-28',
        nextMaintenance: '2025-12-28',
        tasks: [
            {
                taskName: 'Component Production Run',
                operator: 'Sarah Johnson',
                operatorId: 'EMP-1005',
                experience: '5 years',
                shift: 'Morning Shift (7:00 AM - 3:00 PM)',
                contact: 's.johnson@nttdata.com',
                phoneExt: 'x2105',
                timeSlot: '07:00 - 15:00',
                breakTime: '11:00 - 11:30',
                totalHours: 8,
                certification: 'Quality Assurance Specialist'
            },
            {
                taskName: 'End of Day Maintenance',
                operator: 'Michael Chen',
                operatorId: 'EMP-1012',
                experience: '12 years',
                shift: 'Afternoon Shift (1:00 PM - 9:00 PM)',
                contact: 'm.chen@nttdata.com',
                phoneExt: 'x2112',
                timeSlot: '15:30 - 17:00',
                breakTime: '16:15 - 16:30',
                totalHours: 1.5,
                certification: 'Master Technician'
            }
        ]
    },
    {
        date: '2025-12-04',
        machineId: 'M-002',
        machineName: 'Laser Cutting System',
        location: 'Zone B - Floor 1',
        status: 'Active',
        manufacturer: 'Trumpf',
        model: 'TruLaser 3030',
        serialNumber: 'TF-2020-0892',
        installDate: '2020-07-22',
        capacity: '4000W, 1500x3000mm bed',
        lastMaintenance: '2025-11-15',
        nextMaintenance: '2025-12-15',
        tasks: [
            {
                taskName: 'Custom Order Cutting',
                operator: 'David Wilson',
                operatorId: 'EMP-1015',
                experience: '10 years',
                shift: 'Morning Shift (7:00 AM - 3:00 PM)',
                contact: 'd.wilson@nttdata.com',
                phoneExt: 'x2115',
                timeSlot: '08:00 - 16:00',
                breakTime: '12:00 - 12:30',
                totalHours: 8,
                certification: 'CAD/CAM Specialist'
            }
        ]
    },
    {
        date: '2025-12-04',
        machineId: 'M-003',
        machineName: 'Hydraulic Press',
        location: 'Zone A - Floor 2',
        status: 'Idle',
        manufacturer: 'Schuler',
        model: 'HPM 500',
        serialNumber: 'SC-2019-1234',
        installDate: '2019-11-10',
        capacity: '500 tons, 800x800mm bed',
        lastMaintenance: '2025-11-20',
        nextMaintenance: '2025-12-20',
        tasks: []
    },
    {
        date: '2025-12-04',
        machineId: 'M-004',
        machineName: 'Assembly Line Robot',
        location: 'Zone C - Floor 1',
        status: 'Active',
        manufacturer: 'ABB Robotics',
        model: 'IRB 6700',
        serialNumber: 'ABB-2022-5678',
        installDate: '2022-01-18',
        capacity: '200kg payload, 2.8m reach',
        lastMaintenance: '2025-12-01',
        nextMaintenance: '2026-01-01',
        tasks: [
            {
                taskName: 'Product Assembly - Line 2',
                operator: 'Lisa Anderson',
                operatorId: 'EMP-1022',
                experience: '7 years',
                shift: 'Morning Shift (7:00 AM - 3:00 PM)',
                contact: 'l.anderson@nttdata.com',
                phoneExt: 'x2122',
                timeSlot: '07:00 - 15:00',
                breakTime: '11:00 - 11:30',
                totalHours: 8,
                certification: 'Robotics Technician Level II'
            },
            {
                taskName: 'System Diagnostics',
                operator: 'Robert Martinez',
                operatorId: 'EMP-1018',
                experience: '15 years',
                shift: 'Afternoon Shift (1:00 PM - 9:00 PM)',
                contact: 'r.martinez@nttdata.com',
                phoneExt: 'x2118',
                timeSlot: '15:30 - 17:00',
                breakTime: '16:15 - 16:30',
                totalHours: 1.5,
                certification: 'Hydraulic Press Master'
            }
        ]
    },
    // Future date data
    {
        date: '2025-12-06',
        machineId: 'M-001',
        machineName: 'CNC Milling Machine A',
        location: 'Zone A - Floor 1',
        status: 'Active',
        manufacturer: 'Haas Automation',
        model: 'VF-4SS',
        serialNumber: 'HA-2021-0045',
        installDate: '2021-03-15',
        capacity: '40 taper, 10,000 RPM',
        lastMaintenance: '2025-11-28',
        nextMaintenance: '2025-12-28',
        tasks: [
            {
                taskName: 'High Precision Parts Manufacturing',
                operator: 'John Smith',
                operatorId: 'EMP-1001',
                experience: '8 years',
                shift: 'Morning Shift (7:00 AM - 3:00 PM)',
                contact: 'j.smith@nttdata.com',
                phoneExt: 'x2101',
                timeSlot: '07:00 - 15:00',
                breakTime: '11:00 - 11:30',
                totalHours: 8,
                certification: 'CNC Level III Certified'
            }
        ]
    },
    {
        date: '2025-12-06',
        machineId: 'M-002',
        machineName: 'Laser Cutting System',
        location: 'Zone B - Floor 1',
        status: 'Active',
        manufacturer: 'Trumpf',
        model: 'TruLaser 3030',
        serialNumber: 'TF-2020-0892',
        installDate: '2020-07-22',
        capacity: '4000W, 1500x3000mm bed',
        lastMaintenance: '2025-11-15',
        nextMaintenance: '2025-12-15',
        tasks: [
            {
                taskName: 'Batch Processing - Order 305',
                operator: 'Emily Davis',
                operatorId: 'EMP-1008',
                experience: '6 years',
                shift: 'Morning Shift (7:00 AM - 3:00 PM)',
                contact: 'e.davis@nttdata.com',
                phoneExt: 'x2108',
                timeSlot: '08:00 - 12:00',
                breakTime: '10:00 - 10:15',
                totalHours: 4,
                certification: 'Laser Operator Level II'
            },
            {
                taskName: 'Preventive Maintenance',
                operator: 'David Wilson',
                operatorId: 'EMP-1015',
                experience: '10 years',
                shift: 'Afternoon Shift (1:00 PM - 9:00 PM)',
                contact: 'd.wilson@nttdata.com',
                phoneExt: 'x2115',
                timeSlot: '13:00 - 15:00',
                breakTime: '14:00 - 14:15',
                totalHours: 2,
                certification: 'CAD/CAM Specialist'
            }
        ]
    },
    {
        date: '2025-12-06',
        machineId: 'M-005',
        machineName: 'Injection Molding Machine',
        location: 'Zone B - Floor 2',
        status: 'Active',
        manufacturer: 'Engel',
        model: 'e-victory 330',
        serialNumber: 'EG-2020-9876',
        installDate: '2020-09-05',
        capacity: '330 tons, 850g shot size',
        lastMaintenance: '2025-11-10',
        nextMaintenance: '2025-12-10',
        tasks: [
            {
                taskName: 'New Product Line Setup',
                operator: 'Jennifer White',
                operatorId: 'EMP-1028',
                experience: '11 years',
                shift: 'Night Shift (10:00 PM - 6:00 AM)',
                contact: 'j.white@nttdata.com',
                phoneExt: 'x2128',
                timeSlot: '06:00 - 18:00',
                breakTime: '12:00 - 13:00',
                totalHours: 12,
                certification: 'Mold Setup Expert'
            }
        ]
    }
];