document.getElementById('btn-withdraw').addEventListener('click',function(){
    
    const withdrawField= document.getElementById('withdraw-field')
    const newWithdrawAmountString=withdrawField.value
    const newWithdrawAmount= parseFloat(newWithdrawAmountString)
    
    withdrawField.value=''
    
    
   // // adding up the value in withdraw
    const withdrawTotalElement=document.getElementById('withdraw-total')
    
    const previousWithdrawTotalSString= withdrawTotalElement.innerText
    const previousWithdrawTotal=parseFloat(previousWithdrawTotalSString)
   
    const newWithdrawTotal=previousWithdrawTotal+newWithdrawAmount
    withdrawTotalElement.innerText=newWithdrawTotal
   // adding up the value in Balance
   const balanceTotalElement=document.getElementById('balance-total')
    
    const previousBalanceTotalSString= balanceTotalElement.innerText
    const previousBalanceTotal=parseFloat(previousBalanceTotalSString)
    if(newWithdrawAmount>previousBalanceTotal){
        alert('Baap-er bank has insufficient balance!!please deposit more to withdraw')
        return;
    }
    
   
    const newBalanceTotal=previousBalanceTotal-newWithdrawAmount
    balanceTotalElement.innerText=newBalanceTotal
   
    
    })
   