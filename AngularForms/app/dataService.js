angularFormsApp.factory("dataService",
    function () {
        var getEmployee = function(id) {
            if (+id === 123) {
                return {
                    fullName: "Milton Waddams",
                    email: "milton.waddams@this.com",
                    notes: "The ideal employee",
                    department: "Administration",
                    dateHired: '2012-03-01',
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