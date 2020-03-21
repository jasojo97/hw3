const org1_depts = [
    {
        name: 'accounting',
        children: [
            {
                name: 'accounting payable',
                children: []
            },{
                name: 'accounting receivable', 
                children: []
            }
        ]
    },{
        name: 'finance',
        children: [],
    }
]

const org2_depts = [
    {
        name: 'accounting',
        children: [
            {
                name: 'accounting payable', 
                children: []
            },{
                name: 'accounting receivable',
                children: [
                    {
                        name: 'cash',
                        children: []
                    },{
                        name: 'check',
                        children: []
                    }
                ]
            }
        ]
    },{
        name: 'finance',
        children:[
            {
                name:'investment',
                children: []
            }
        ]
    }
]

const count = 1;
function PrintDepts(depts, element, count){
    count++;
    if( !depts || !depts.length)
        return;
    var len = depts.length;
    var ul = document.createElement('ul');
    ul.id = "list";
    // ul.style.listStyle = "none";
  //  ul.style = "list-style-type:;";
   var v1 = document.getElementById('org1');
    
    
    for(var i = 0; i < len ; i++) {
        var li = document.createElement('li');
        li.id = "inner"+count++;
        li.innerText = (depts[i].name);
        ul.appendChild(li);
        PrintDepts(depts[i].children, li, count);   
    }
    element.appendChild(ul);
}
PrintDepts(org1_depts, document.getElementById('org1'), count);
PrintDepts(org2_depts, document.getElementById('org2'), count);