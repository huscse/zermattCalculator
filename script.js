
// Define packs
const packs = [
    { name: "Pack1", batteryStorageModel: 1500, electricityGeneratedW: 2560 },
    { name: "Pack2", batteryStorageModel: 2300, electricityGeneratedW: 4800 },
    { name: "Pack3", batteryStorageModel: 4600, electricityGeneratedW: 9600 },
    { name: "Pack4", batteryStorageModel: 6100, electricityGeneratedW: 12800 },
    { name: "Pack5", batteryStorageModel: 9200, electricityGeneratedW: 19200 }
];


const appliances = [
    { appliance: 'Blender', power: 500, usage: 0.1 },
    { appliance: 'Toaster', power: 650, usage: 0.1 },
<<<<<<< HEAD
    { appliance: 'Refrigerator', power: 120, usage: 24 },
=======
>>>>>>> 2dc39836ed0dc1c180da706d7f454cc8ef274e44
    { appliance: 'Refrigerator', power: 120, usage: 12 },
    { appliance: 'Rice Cooker', power: 820, usage: 1 },
    { appliance: 'Can Opener', power: 150, usage: 0.1 },
    { appliance: 'Coffee Machine', power: 1000, usage: 0.1 },
    { appliance: 'Dishwasher', power: 1300, usage: 1 },
    { appliance: 'Espresso Machine', power: 800, usage: 0.1 },
    { appliance: 'Garbage Disposal', power: 450, usage: 0.1 },
    { appliance: 'Kettle – Electric', power: 1200, usage: 0.1 },
    { appliance: 'Microwave', power: 1000, usage: 0.1 },
    { appliance: 'Oven – Electric', power: 1200, usage: 2 },
    { appliance: 'Toaster Oven', power: 1200, usage: 1 },
    { appliance: 'Stand Mixer', power: 300, usage: 1 },
    { appliance: 'Box Fan', power: 200, usage: 8 },
    { appliance: 'Ceiling Fan', power: 120, usage: 8 },
    { appliance: 'Space Heater NA', power: 1500, usage: 8 },
    { appliance: 'Tankless Water Heater – Electric', power: 18000, usage: 2 },
    { appliance: 'Water Heater – Electric', power: 4500, usage: 2 },
    { appliance: 'Window Air Conditioner 10,000 BTU NA', power: 900, usage: 8 },
    { appliance: 'Window Air Conditioner 12,000 BTU NA', power: 3250, usage: 8 },
    { appliance: 'Well Pump – 1/3 1HP', power: 750, usage: 2 },
    { appliance: 'Clothes Dryer – Electric', power: 3000, usage: 2 },
    { appliance: 'Clothes Dryer – Gas', power: 1800, usage: 2 },
    { appliance: 'Clothes Washer', power: 800, usage: 2 },
    { appliance: 'Iron', power: 1200, usage: 1 },
    { appliance: 'Bluray Player', power: 15, usage: 3 },
    { appliance: 'Cable Box', power: 35, usage: 5 },
    { appliance: 'DVD Player', power: 15, usage: 5 },
    { appliance: 'TV – LCD', power: 150, usage: 5 },
    { appliance: 'TV – Plasma', power: 200, usage: 5 },
    { appliance: 'Satellite Dish', power: 25, usage: 5 },
    { appliance: 'Stereo Receiver', power: 450, usage: 5 },
    { appliance: 'Video Game Console', power: 150, usage: 3 },
    { appliance: 'Light', power: 5, usage: 6 },
    { appliance: 'Desktop Computer (Standard)', power: 200, usage: 12 },
    { appliance: 'Desktop Computer (Gaming)', power: 500, usage: 3 },
    { appliance: 'Laptop', power: 100, usage: 12 },
    { appliance: 'LCD Monitor', power: 100, usage: 12 },
    { appliance: 'Modem', power: 7, usage: 24 },
    { appliance: 'Paper Shredder', power: 150, usage: 0.1 },
    { appliance: 'Printer', power: 100, usage: 0.1 },
    { appliance: 'Router', power: 7, usage: 24 },
    { appliance: 'Smart Phone – Recharge', power: 6, usage: 1 },
    { appliance: 'Tablet – Recharge', power: 8, usage: 1 },
    { appliance: 'Saw', power: 1100, usage: 1 },
    { appliance: 'Sander', power: 100, usage: 1 },
    { appliance: 'Drill', power: 750, usage: 1 },
    { appliance: 'Hedge Trimmer', power: 450, usage: 1 },
    { appliance: 'Weed Eater', power: 500, usage: 1 },
    { appliance: 'Clock Radio', power: 7, usage: 1 },
    { appliance: 'Curling Iron', power: 150, usage: 1 },
    { appliance: 'Humidifier', power: 200, usage: 1 },
    { appliance: 'Dehumidifier', power: 280, usage: 1 },
    { appliance: 'Electric Shaver', power: 15, usage: 0.5 },
    { appliance: 'Electric Blanket', power: 200, usage: 8 },
    { appliance: 'Hair Dryer', power: 1500, usage: 1 },
    { appliance: 'Radiotelephone – Receive', power: 5, usage: 1 },
    { appliance: 'Radiotelephone – Transmit', power: 75, usage: 1 },
    { appliance: 'Sewing Machine', power: 100, usage: 2 },
    { appliance: 'Vacuum', power: 1000, usage: 1 }
];


let rowCount = 0; // Start from 0


document.addEventListener('DOMContentLoaded', function() {

    // Create the first row
    addApplianceRow();

    // Set up the Add Appliance button
    document.getElementById('add_appliance').addEventListener('click', addApplianceRow);
});


function createRow(index) {
    let rowElement = document.createElement('div');
    rowElement.classList.add('m__row');
    rowElement.id = 'row__' + index;

    rowElement.innerHTML = `
        <div class="m__cell m_block_3">
            <div class="m__col_3">
                <div class="m__label">
                    <div class="m__name">Select Appliance</div>
                </div>
                <div class="m__group">
                    <select id="Appliance_${index}" placeholder="Type Appliance..." autocomplete="off" class="appliance_select">
                    </select>
                </div>
            </div>
            <div class="m__col_3">
    <div class="m__label">
        <div class="m__name">
            Power Rating (W)
            

            
        </div>
    </div>
    <div class="m__group">
        <input
            type="text"
            value=""
            placeholder="100 W"
            id="PowerRating_${index}"
            inputmode="numeric"
            class="autonumeric mm__input"
            data-symb=" W"
            data-min="0"
            data-max="100000"
            data-step="1"
            data-decimal="0"
        >
        <button tabindex="-1" class="btn-helper btn-plus"></button>
        <button tabindex="-1" class="btn-helper btn-minus"></button>
    </div>
</div>
            <div class="m__col_3">
                <div class="m__label">
                    <div class="m__name">Hours of use</div>
                </div>
                <div class="m__group">
                    <input type="text" value="" placeholder="1.2 Hours" id="HourseUse_${index}" inputmode="numeric" class="autonumeric mm__input" data-symb=" Hours" data-min="0" data-max="24" data-step="0.1" data-decimal="1">
                    <button tabindex="-1" class="btn-helper btn-plus"></button>
                    <button tabindex="-1" class="btn-helper btn-minus"></button>
                </div>
            </div>
        </div>
        <div class="remove_appliance">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 2l.324 .001l.318 .004l.616 .017l.299 .013l.579 .034l.553 .046c4.785 .464 6.732 2.411 7.196 7.196l.046 .553l.034 .579c.005 .098 .01 .198 .013 .299l.017 .616l.005 .642l-.005 .642l-.017 .616l-.013 .299l-.034 .579l-.046 .553c-.464 4.785 -2.411 6.732 -7.196 7.196l-.553 .046l-.579 .034c-.098 .005 -.198 .01 -.299 .013l-.616 .017l-.642 .005l-.642 -.005l-.616 -.017l-.299 -.013l-.579 -.034l-.553 -.046c-4.785 -.464 -6.732 -2.411 -7.196 -7.196l-.046 -.553l-.034 -.579a28.058 28.058 0 0 1 -.013 -.299l-.017 -.616c-.003 -.21 -.005 -.424 -.005 -.642l.001 -.324l.004 -.318l.017 -.616l.013 -.299l.034 -.579l.046 -.553c.464 -4.785 2.411 -6.732 7.196 -7.196l.553 -.046l.579 -.034c.098 -.005 .198 -.01 .299 -.013l.616 -.017c.21 -.003 .424 -.005 .642 -.005zm3 9h-6l-.117 .007a1 1 0 0 0 .117 1.993h6l.117 -.007a1 1 0 0 0 -.117 -1.993z" /></svg>
        </div>
    `;

    return rowElement;
}


function addApplianceRow() {
    rowCount++;

    // Create a new row element
    let newRow = createRow(rowCount);

    // Append the new row to m__rows_section
    document.querySelector('.m__rows_section').appendChild(newRow);

    // Initialize the new row
    initializeRow(newRow, rowCount);

    MCalculate();
    checkRemoveButtons();
}


function initializeRow(rowElement, index) {
    // Get references to inputs
    let selectInput = rowElement.querySelector(`#Appliance_${index}`);
    let powerRatingInput = rowElement.querySelector(`#PowerRating_${index}`);
    let hoursUseInput = rowElement.querySelector(`#HourseUse_${index}`);

    // Initialize AutoNumeric on the new inputs
    new AutoNumeric(powerRatingInput, {
        decimalPlaces: powerRatingInput.getAttribute("data-decimal") || 0,
        digitGroupSeparator: ",",
        decimalCharacter: ".",
        minimumValue: powerRatingInput.getAttribute("data-min") || 0,
        maximumValue: powerRatingInput.getAttribute("data-max") || 100000,
        currencySymbol: powerRatingInput.getAttribute("data-symb") || '',
        currencySymbolPlacement: "s"
    });

    new AutoNumeric(hoursUseInput, {
        decimalPlaces: hoursUseInput.getAttribute("data-decimal") || 0,
        digitGroupSeparator: ",",
        decimalCharacter: ".",
        minimumValue: hoursUseInput.getAttribute("data-min") || 0,
        maximumValue: hoursUseInput.getAttribute("data-max") || 100000,
        currencySymbol: hoursUseInput.getAttribute("data-symb") || '',
        currencySymbolPlacement: "s"
    });

    // Add event listeners for the plus and minus buttons
    addIncrementDecrementListeners(powerRatingInput);
    addIncrementDecrementListeners(hoursUseInput);

    // Add event listener to inputs for MCalculate()
    powerRatingInput.addEventListener('input', MCalculate);
    hoursUseInput.addEventListener('input', MCalculate);

    // Initialize Tom Select on the select input
    new TomSelect(selectInput, {
        options: appliances.map(function(item) {
            return { value: item.appliance, text: item.appliance };
        }),
        create: true,
        sortField: {
            field: "text",
            direction: "asc"
        }
    });


    // Add event listener to the select input to auto-fill the inputs
    selectInput.addEventListener('change', function() {
        let selectedApplianceName = selectInput.value;
        let selectedAppliance = appliances.find(function(item) {
            return item.appliance === selectedApplianceName;
        });
        if (selectedAppliance) {
            // Set the power rating and hours use inputs
            AutoNumeric.set(powerRatingInput, selectedAppliance.power);
            AutoNumeric.set(hoursUseInput, selectedAppliance.usage);

            // Call MCalculate to update the total
            MCalculate();
        }
    });


    // Add event listener to the remove button
    const removeButton = rowElement.querySelector('.remove_appliance');
    removeButton.addEventListener('click', function() {
        removeApplianceRow(rowElement);
    });

    // Initially hide the remove button if it's the first row
    checkRemoveButtons();
}


function addIncrementDecrementListeners(inputElement) {
    const minusBtn = inputElement.parentElement.querySelector(".btn-minus");
    const plusBtn = inputElement.parentElement.querySelector(".btn-plus");

    minusBtn.addEventListener('click', function() {
        const currentValue = parseFloat(AutoNumeric.getNumber(inputElement)) || 0;
        const step = parseFloat(inputElement.getAttribute("data-step"));
        const min = parseFloat(inputElement.getAttribute("data-min"));
        const newValue = Math.max(min, currentValue - step);
        AutoNumeric.set(inputElement, newValue);
        MCalculate();
    });

    plusBtn.addEventListener('click', function() {
        const currentValue = parseFloat(AutoNumeric.getNumber(inputElement)) || 0;
        const step = parseFloat(inputElement.getAttribute("data-step"));
        const max = parseFloat(inputElement.getAttribute("data-max"));
        const newValue = Math.min(max, currentValue + step);
        AutoNumeric.set(inputElement, newValue);
        MCalculate();
    });
}


function removeApplianceRow(rowElement) {
    if (document.querySelectorAll('.m__rows_section .m__row').length > 1) {
        rowElement.parentNode.removeChild(rowElement);
        MCalculate();
        checkRemoveButtons();
    } else {
        alert("You must have at least one appliance.");
    }
}


function checkRemoveButtons() {
    let rows = document.querySelectorAll('.m__rows_section .m__row');
    if (rows.length <= 1) {
        // Hide remove buttons
        rows[0].querySelector('.remove_appliance').style.display = 'none';
    } else {
        // Show remove buttons
        rows.forEach(function(row) {
            row.querySelector('.remove_appliance').style.display = 'block';
        });
    }
}


document.getElementById('removeAllAppliances').addEventListener('click', function () {
    // Remove all rows except the default one
    let rows = document.querySelectorAll('.m__rows_section .m__row');
    rows.forEach((row, index) => {
        if (index > 0) {
            row.remove();
        }
    });

    // Reset the default row to initial values
    resetDefaultRow();

    // Update total energy consumption
    MCalculate();

    // Re-check visibility of remove buttons
    checkRemoveButtons();
});


function resetDefaultRow() {
    const firstRow = document.querySelector('.m__rows_section .m__row:first-child');
    if (firstRow) {
        // Reset the appliance select input
        const applianceSelect = firstRow.querySelector('select');
        if (applianceSelect) {
            applianceSelect.value = ""; // Set to default empty value
        }

        // Reset power rating input
        const powerRatingInput = firstRow.querySelector('[id^="PowerRating_"]');
        if (powerRatingInput) {
            powerRatingInput.value = "100"; // Set default value (update if different)
        }

        // Reset hours of use input
        const hoursUseInput = firstRow.querySelector('[id^="HourseUse_"]');
        if (hoursUseInput) {
            hoursUseInput.value = "1.2"; // Set default value (update if different)
        }
    }
}


function updateDivClass(energy) {
    // Get the div
    const div = document.getElementById('block_table1');
    const div2 = document.getElementById('block_table2');

    // Find the recommended pack
    let recommendedPack = packs.find(pack => energy <= pack.batteryStorageModel) || packs[packs.length - 1];

    // Remove existing pack classes and add the new pack class
    div.className = `block_table1 ${recommendedPack.name}`;
    div2.className = `block_table2 ${recommendedPack.name}`;
}


function MCalculate() {
    let totalEnergy = 0;

    document.querySelector('.block_table1 .Appliance_labels').innerHTML = ``;
    document.querySelector('.block_table1 #zermatt_BS_1_5').innerHTML = ``;
    document.querySelector('.block_table1 #zermatt_BS_2_3').innerHTML = ``;
    document.querySelector('.block_table1 #zermatt_BS_4_6').innerHTML = ``;
    document.querySelector('.block_table1 #zermatt_BS_6_1').innerHTML = ``;
    document.querySelector('.block_table1 #zermatt_BS_9_2').innerHTML = ``;

    document.querySelector('.block_table2 .Appliance_labels').innerHTML = ``;
    document.querySelector('.block_table2 #zermatt_SG-600').innerHTML = ``;
    document.querySelector('.block_table2 #zermatt_SG-1200').innerHTML = ``;
    document.querySelector('.block_table2 #zermatt_SG-2400').innerHTML = ``;
    document.querySelector('.block_table2 #zermatt_SG-3200').innerHTML = ``;
    document.querySelector('.block_table2 #zermatt_SG-4800').innerHTML = ``;

        let rows = document.querySelectorAll('.m__rows_section .m__row');
    
    rows.forEach(function(row) {

        let appliance_val = row.querySelector('[id^="Appliance_"]').value;
        let powerRatingInput = row.querySelector('[id^="PowerRating_"]');
        let hoursUseInput = row.querySelector('[id^="HourseUse_"]');

        let powerRating = parseFloat(AutoNumeric.getNumber(powerRatingInput)) || 0;
        let hoursUse = parseFloat(AutoNumeric.getNumber(hoursUseInput)) || 0;

        //Combined energy usage of all appliances in one day. Calcualtes one at a time and adds to total energy
        totalEnergy += powerRating * hoursUse;

    });
    
    updateDivClass(totalEnergy);

    document.querySelector('.block_table1 .informative_').classList.remove('m_less');
    document.querySelector('.block_table1 .informative_').classList.remove('m_more');
    document.querySelector('.block_table2 .informative_').classList.remove('m_less');
    document.querySelector('.block_table2 .informative_').classList.remove('m_more');

    if (totalEnergy < 1500) {
        document.querySelector('.block_table1 .informative_').classList.add('m_less');
        document.querySelector('.block_table2 .informative_').classList.add('m_less');
    }
    
    if (totalEnergy > 9200) {
        document.querySelector('.block_table1 .informative_').classList.add('m_more');
        document.querySelector('.block_table2 .informative_').classList.add('m_more');
    }
    

    packs.forEach(pack => {

        // Parsing each row of user input appliances
        rows.forEach(function(row) {
            let appliance_val = row.querySelector('[id^="Appliance_"]').value;
            let powerRatingInput = row.querySelector('[id^="PowerRating_"]');
            let hoursUseInput = row.querySelector('[id^="HourseUse_"]');

            let powerRating = parseFloat(AutoNumeric.getNumber(powerRatingInput)) || 0;
            let hoursUse = parseFloat(AutoNumeric.getNumber(hoursUseInput)) || 0;

            if (appliance_val != '' && powerRating > 0 && hoursUse > 0) {

                const results = calculatePowerAndTime(
                    totalEnergy,
                    pack.batteryStorageModel,
                    pack.electricityGeneratedW
                );
               
                if (pack.name == "Pack1") {
                    document.querySelector('.block_table2 #zermatt_SG-600').innerHTML = `<div><span class="m__val">${results.solar_charging_time} days</span><span class="m_nval">${results.no_charge_time} days</span></div>`;
                    document.querySelector('.block_table1 #zermatt_BS_1_5').innerHTML = `<div>${results.no_charge_time} days</div>`;
                }
                if (pack.name == "Pack2") {
                    document.querySelector('.block_table2 #zermatt_SG-1200').innerHTML = `<div><span class="m__val">${results.solar_charging_time} days</span><span class="m_nval">${results.no_charge_time} days</span></div>`;
                    document.querySelector('.block_table1 #zermatt_BS_2_3').innerHTML = `<div>${results.no_charge_time} days</div>`;
                }
                if (pack.name == "Pack3") {
                    document.querySelector('.block_table2 #zermatt_SG-2400').innerHTML = `<div><span class="m__val">${results.solar_charging_time} days</span><span class="m_nval">${results.no_charge_time} days</span></div>`;
                    document.querySelector('.block_table1 #zermatt_BS_4_6').innerHTML = `<div>${results.no_charge_time} days</div>`;
                }
                if (pack.name == "Pack4") {
                    document.querySelector('.block_table2 #zermatt_SG-3200').innerHTML = `<div><span class="m__val">${results.solar_charging_time} days</span><span class="m_nval">${results.no_charge_time} days</span></div>`;
                    document.querySelector('.block_table1 #zermatt_BS_6_1').innerHTML = `<div>${results.no_charge_time} days</div>`;
                }
                if (pack.name == "Pack5") {
                    document.querySelector('.block_table2 #zermatt_SG-4800').innerHTML = `<div><span class="m__val">${results.solar_charging_time} days</span><span class="m_nval">${results.no_charge_time} days</span></div>`;
                    document.querySelector('.block_table1 #zermatt_BS_9_2').innerHTML = `<div>${results.no_charge_time} days</div>`;
                }

            }

        })
        
        
        // console.log(`Results for ${pack.name}:`);
        // console.log(`Results for ${appliance_val}:`);
        // console.log(`Power_m: ${results.Power_m} W/hour`);
        // console.log(`Applience_power_time: ${results.Applience_power_time} hours\n`);
        
    });

    // Update the total energy display
    let totalEnergyElement = document.querySelector('#Total_Energy span');
    totalEnergyElement.textContent = totalEnergy.toFixed(0) + ' Wh/day';
    document.querySelector('.power_requirement span').textContent = totalEnergy.toFixed(0) + ' Wh';

}


function calculatePowerAndTime(totalEnergy, batteryStorageModel, electricityGeneratedW) {
    // Constants
    const BATTERY_EFFICIENCY = 0.8;
    let totalEnergyPerDay = totalEnergy;

    // Average hourly usage based on power rating of appliances and how often user plans to use each appliance per day. "wieghted average."
    let totalEnergyPerHour = totalEnergyPerDay / 24; 

    // Calculate time a zermatt system can power all appliances without recharge
    let noChargeTime = (batteryStorageModel * BATTERY_EFFICIENCY) / totalEnergyPerDay;

    // Calculate time a zermatt system can power all appliances with recharging
    let withChargeTime = (electricityGeneratedW - (batteryStorageModel * BATTERY_EFFICIENCY)) / totalEnergyPerDay;

    /*
    console.log(powerRating, hoursOfUse, batteryStorageModel, electricityGeneratedW);
   
    let t_hours_of_use = (batteryStorageModel * 0.8) / powerRating;
    let ElectricityGenerated = electricityGeneratedW;
    let new_result = "";
    if (t_hours_of_use >= 12 && ElectricityGenerated > powerRating) {
        new_result = "24/7 Continuous<br>Operation Ready";


    } else if (t_hours_of_use < 12 && ElectricityGenerated > powerRating) {
        new_result = "Hours of Use<br>per day: " + (parseFloat(12 + t_hours_of_use)).toFixed(1) + " hours*";
    } else if (ElectricityGenerated < powerRating) {

        let new_hours_use = (batteryStorageModel * 0.8) / (powerRating - (powerRating * 0.8));
        new_result = "Hours of Use<br>with Sunlight: " + new_hours_use.toFixed(1) + " hours*";

        if (new_hours_use > 12) {
            new_hours_use = 12 + (new_hours_use * (new_hours_use - 12) / new_hours_use);
            new_result = "Hours of Use<br>until Sundown: " + new_hours_use.toFixed(1) + " hours*";
        }
    }
    */

    // Return the results
    return {
        no_charge_time: noChargeTime.toFixed(1), // Rounded to 2 decimal places
        solar_charging_time: withChargeTime.toFixed(1)
    };
}


/*
function calculatePowerAndTime2(powerRating, hoursOfUse, batteryStorageModel, electricityGeneratedW) {
    // Constants
    const CONSTANT = 0.16667;
    const BATTERY_EFFICIENCY = 0.8;

    // Calculate Power_m
    let part1 = (powerRating - (CONSTANT * 1000 * electricityGeneratedW)) * 0.5;
    if (part1 < 0) {
        part1 = 0; // Set part1 to 0 if it's negative
    }
    let part2 = powerRating * 0.5;
    let powerM = part1 + part2;

    // Calculate Applience_power_time
    let appliancePowerTime = (batteryStorageModel * BATTERY_EFFICIENCY) / powerM;


    let tbl1_Hours_val = (1000 / powerRating) * (batteryStorageModel / 1000) * BATTERY_EFFICIENCY;


    console.log("less");
    // Return the results
    return {
       // Power_m: powerM.toFixed(1), // Rounded to 2 decimal places
        Applience_power_time: appliancePowerTime.toFixed(1), // Rounded to 2 decimal places
        tbl1_hours: tbl1_Hours_val.toFixed(1)
    };
}
*/


function MShow() {
    let has_empty = 0;
    let rows = document.querySelectorAll('.m__rows_section .m__row');
    rows.forEach(function(row) {
        let appliance_val = row.querySelector('[id^="Appliance_"]').value;
        let powerRatingInput = row.querySelector('[id^="PowerRating_"]');
        let hoursUseInput = row.querySelector('[id^="HourseUse_"]');

        let powerRating = parseFloat(AutoNumeric.getNumber(powerRatingInput)) || 0;
        let hoursUse = parseFloat(AutoNumeric.getNumber(hoursUseInput)) || 0;
        if (appliance_val == '' && powerRating == 0 && hoursUse == 0) {
            document.querySelector('#m__error').style.display = "block";
            setTimeout(function() {
                document.querySelector('#m__error').style.display = 'none';
            }, 2000);
            has_empty = 1;
        }
    });

    if (has_empty) {
        return 0;
    }

    var blockTable1 = document.querySelector('.block_table1');
    var blockTable2 = document.querySelector('.block_table2');
    blockTable1.style.display = 'block';
    blockTable2.style.display = 'block';
    blockTable1.scrollIntoView({ behavior: 'smooth' });
}
