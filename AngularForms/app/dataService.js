angularFormsApp.factory("dataService",
    function () {
        var getEmployee = function(id) {
            if (+id === 123) {
                return {
                    fullName: "Milton Waddams",
                    notes: "The ideal employee",
                    department: "Administration",
                    perkCar: false,
                    perkStock: true,
                    perkSixWeeks: false,
                    payrollType: "none"
                };
            }

            return undefined;
        };

        var insertEmployee = function(newEmployee) {
            return true;
        };

        var updateEmployee = function(employee) {
            return true;
        };

        return {
            insertEmployee: insertEmployee,
            updateEmployee: updateEmployee,
            getEmployee: getEmployee
        };
    });