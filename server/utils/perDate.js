class PerDate {
    get perDay() {
        return new Date().setHours(0, 0, 0)
    }

    get perWeek() {
        return new Date(
            new Date().setDate(new Date().getDate() + 1 - new Date().getDay())
        ).setHours(0, 0, 0);
    }

    get perMonth() {
        return new Date(new Date().setMonth(new Date().getMonth(), 1)).setHours(
            0,
            0,
            0
        );
    }

    get perYear() {
        return new Date(new Date().getFullYear(), 0, 1);
    }
}

module.exports = new PerDate()