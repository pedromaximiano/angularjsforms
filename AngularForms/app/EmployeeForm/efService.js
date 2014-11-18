angularFormsApp.factory("efService",
    function () {
        return {
            employee: {
                fullName: "Milton Waddams",
                notes: "The ideal employee",
                department: "Administration",
                perkCar: false,
                perkStock: true,
                perkSixWeeks: false,
                payrollType: "none"
            }
        };
    });