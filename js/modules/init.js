async function loadEmployeeData() {
    try {
        const response = await fetch('../data/employees.json');
        if (!response.ok) {
            throw new Error('Failed to fetch employee data');
        }
        return await response.json();
    } catch (error) {
        console.error('Error loading employee data:', error);
        return [];
    }
}

export { loadEmployeeData };
