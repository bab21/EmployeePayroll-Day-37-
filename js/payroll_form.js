window.addEventListener('DOMContentLoaded',(event)=>{
    const name=document.querySelector("#name");
    const textError=document.querySelector('.text-error');
    name.addEventListener('input',function(){
        if(name.value.length==0){
            textError.textContent="";
            return;
        }
        try{
            (new EmployeePayrollData()).name=name.value;
            textError.textContent="";
        }catch(e){
            textError.textContent=e;
        }
    });
    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function(){
        output.textContent = salary.value;
    });
});

const save = ()=>{
    try{
        let employeePayrollData = createEmployeePayrollData();
    }catch(e){
        return;
    }
}

const createEmployeePayrollData = () =>{
    let employeePayrollData=new EmployeePayrollData();
    try{
        employeePayrollData.name=getInputValueById('#name');
        console.log("name entered is "+employeePayrollData.name);
    }catch(e){
        setTextValue('.text-error',e);
        throw e;
    }
    employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
    employeePayrollData.departments=getSelectedValues('[name=department]').pop();
    console.log("department "+employeePayrollData.departments);
    employeePayrollData.salary=getInputValueById('#salary');
    employeePayrollData.notes=getInputValueById('#notes');
    employeePayrollData.startDate = new Date(getInputValueById('#year'), getInputValueById('#month'),
                                            getInputValueById('#day'));
    alert(employeePayrollData.toString());
    return employeePayrollData;
}

const getInputValueById = (id) =>{
    let value=document.querySelector(id).value;
    return value;
}
const getSelectedValues = (propertyValue) =>{
    let allItems=document.querySelectorAll(propertyValue);
    let selItems=[];
    allItems.forEach(item=>{
        if(item.checked) selItems.push(item.value);
    });
    return selItems;
}