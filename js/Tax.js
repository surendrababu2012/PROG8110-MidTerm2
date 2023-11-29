export default class Tax {
    calculate(amount) {
        let ontarioTax;
        let fedTax;


        switch (true) {
            case (amount <= 40922):
                ontarioTax = ((amount - 0.00) * 0.0505) + 0.00;
                break;

            case (amount > 220000):
                ontarioTax = ((amount - 220000) * 0.1316) + 21929.00;
                break;

            case (amount <= 81847 && amount > 40922):
                ontarioTax = ((amount - 40922.00) * 0.0915) + 2067.00;
                break;

            case (amount <= 150000 && amount > 81847):
                ontarioTax = ((amount - 81847.00) * 0.1116) + 5811.00;
                break;

            case (amount <= 220000 && amount > 150000):
                ontarioTax = ((amount - 150000) * 0.1216) + 13417.00;
                break;

            default:
                throw "wrong bracket";
        }

        switch (true) {
            case (amount <= 45282):
                fedTax = ((amount - 0.00) * 0.15) + 0.00;
                break;

            case (amount > 200000):
                fedTax = ((amount - 200000) * 0.33) + 46317.00;
                break;

            case (amount <= 90563 && amount > 45282):
                fedTax = ((amount - 45282.00) * 0.205) + 6792.00;
                break;

            case (amount <= 140388 && amount > 90563):
                fedTax = ((amount - 90563.00) * 0.26) + 16075.00;
                break;

            case (amount <= 200000 && amount > 140388):
                fedTax = ((amount - 140388) * 0.29) + 29029.00;
                break;

            default:
                throw "wrong bracket";
        }


        return [ontarioTax.toFixed(3), fedTax.toFixed(3)];
    }
}
