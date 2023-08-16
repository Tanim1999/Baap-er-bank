 document.getElementById('btn-deposit').addEventListener('click',function(){
    
 const depositField= document.getElementById('deposit-field')
 const newDepositAmountString=depositField.value
 const newDepositAmount= parseFloat(newDepositAmountString)
 depositField.value=''
 
// // adding up the value in deposit
 const depositTotalElement=document.getElementById('deposit-total')
 
 const previousDepositTotalSString= depositTotalElement.innerText
 const previousDepositTotal=parseFloat(previousDepositTotalSString)

 const newDepositTotal=previousDepositTotal+newDepositAmount
 depositTotalElement.innerText=newDepositTotal
// adding up the value in Balance
const balanceTotalElement=document.getElementById('balance-total')
 
 const previousBalanceTotalSString= balanceTotalElement.innerText
 const previousBalanceTotal=parseFloat(previousBalanceTotalSString)

 const newBalanceTotal=previousBalanceTotal+newDepositAmount
 balanceTotalElement.innerText=newBalanceTotal

 
 })
