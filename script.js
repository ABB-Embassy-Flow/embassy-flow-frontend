function selectCard(cardId) {
    const card1 = document.getElementById('card-1');
    const card2 = document.getElementById('card-2');
    const continueBtn = document.getElementById('continue-btn');

    card1.className = "document-card border-2 border-slate-200 hover:border-slate-300 rounded-2xl p-6 text-center cursor-pointer bg-white transition shadow-sm relative";
    card1.querySelector('.w-5').className = "w-5 h-5 border-2 border-slate-300 rounded-full mx-auto flex items-center justify-center bg-white";
    card1.querySelector('.w-5 div').className = "w-2 h-2 bg-slate-300 rounded-full hidden";

    card2.className = "document-card border-2 border-slate-200 hover:border-slate-300 rounded-2xl p-6 text-center cursor-pointer bg-white transition relative";
    card2.querySelector('.w-5').className = "w-5 h-5 border-2 border-slate-300 rounded-full mx-auto flex items-center justify-center bg-white";
    card2.querySelector('.w-5 div').className = "w-2 h-2 bg-slate-300 rounded-full hidden";

    const activeCard = document.getElementById(`card-${cardId}`);
    activeCard.className = "document-card border-2 border-blue-600 rounded-2xl p-6 text-center cursor-pointer bg-white transition shadow-sm relative";
    
    const activeRadio = activeCard.querySelector('.w-5');
    activeRadio.className = "w-5 h-5 border-2 border-blue-600 rounded-full mx-auto flex items-center justify-center bg-white";
    
    const activeDot = activeRadio.querySelector('div');
    activeDot.className = "w-2.5 h-2.5 bg-blue-600 rounded-full";

    if (cardId === '2') {
        continueBtn.removeAttribute('disabled');
        continueBtn.className = "w-full max-w-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition shadow-md shadow-blue-500/20 cursor-pointer text-center";
    } else {
        continueBtn.setAttribute('disabled', 'true');
        continueBtn.className = "w-full max-w-lg bg-slate-300 text-white font-semibold py-4 rounded-xl transition shadow-sm cursor-not-allowed text-center";
    }
}