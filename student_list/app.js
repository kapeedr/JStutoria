
         class Student {
            constructor(name, rollNumber, DOB) {
            this.name = name;
            this.rollNumber = rollNumber;
            this.DOB = DOB;
                }
            };
    
    
            let student_list = [];
    
    
    
    
    
            var n = 1;
            var x = 0;
    
            function AddRow(){
                let name;
                let roll;
                let dob;
    
                var AddRown = document.getElementById('show');
                var NewRow = AddRown.insertRow(n);
    
                name = document.getElementById("sname").value;
                roll = document.getElementById("rollNumber").value;
                dob = document.getElementById("DOB").value;
                
                let studentdetails = new Student(name,roll,dob);
                student_list.push(studentdetails);
    
                var cel1 = NewRow.insertCell(0);
                var cel2 = NewRow.insertCell(1);
                var cel3 = NewRow.insertCell(2);
                
                console.log("deepak");
                cel1.innerHTML = student_list[x].name;
                cel2.innerHTML = student_list[x].rollNumber;
                cel3.innerHTML = student_list[x].DOB;
    
                document.getElementById("sname").value = null;
                document.getElementById("rollNumber").value = null;
                document.getElementById("DOB").value =null;
    
    
                n++;
                x++;
            }


            let studenbyname = student_list;
            let studentbyroll = student_list;
            let studentbydob = student_list;


            function display(list)
            {
                var tb = document.getElementById('show');
                for(let i =0; i< list.length; i++)
            {
                var NewRow = tb.insertRow(i+1);
                var cel1 = NewRow.insertCell(0);
                var cel2 = NewRow.insertCell(1);
                var cel3 = NewRow.insertCell(2);

                cel1.innerHTML = list[i].name;
                cel2.innerHTML = list[i].rollNumber;
                cel3.innerHTML = list[i].DOB;


            }
            }


            function compareName(a, b) {

                // converting to uppercase to have case-insensitive comparison
                const name1 = a.name.toUpperCase();
                const name2 = b.name.toUpperCase();
            
                let comparison = 0;
            
                if (name1 > name2) {
                    comparison = 1;
                } else if (name1 < name2) {
                    comparison = -1;
                }
                return comparison;
            }
            
            
            function SortbyName(){
        
            var tb = document.getElementById('show');
            while(tb.rows.length > 1) {

            tb.deleteRow(1);
            console.log("run");
            }
            
            studenbyname.sort(compareName);
            

            display(studenbyname);
        }


        function SortbyRoll(){
        
            var tb = document.getElementById('show');
            while(tb.rows.length > 1) {

            tb.deleteRow(1);
            }
            
            studentbyroll.sort((a, b) => {
                return a.rollNumber - b.rollNumber;
            });
            

            display(studentbyroll);
        }

        function SortbyDOB(){
        
            var tb = document.getElementById('show');
            while(tb.rows.length > 1) {

            tb.deleteRow(1);
            }
            
            studentbydob.sort((a, b) => {
                return new Date(a.DOB)   - new Date(b.DOB);
            });
            

            display(studentbydob);
        }


        let list_lessthanDate = [];
        function LessthanDate(){
            let lessdate = document.getElementById('LessthanDate').value;
            let b = new Date(lessdate);
            var tb = document.getElementById('show');
            while(tb.rows.length > 1) {

            tb.deleteRow(1);
            }


            for(let i =0; i< student_list.length; i++)
            {
                let a = new Date(student_list[i].DOB);
                if(a<=b)
                   { list_lessthanDate.push(student_list[i]);
                    
                   }


            }
            
            
            if(list_lessthanDate.length >0)
                display(list_lessthanDate);
            else display(student_list);
        }

        

        








    