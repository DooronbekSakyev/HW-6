function nftCard() {

    
    const body = document.querySelector('body');
    body.style.cssText = `
    font-family: 'Outfit', sans-serif;
    background-color: hsl(217, 54%, 11%);
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    `
    

    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper'
    wrapper.style.cssText = `
    width: 300px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    `
    


    const card = document.createElement('div');
    card.style.cssText = `
    padding: 20px 20px;
    background-color: hsl(216, 50%, 16%);
    border-radius: 20px;
    `
    


    const mainImg = document.createElement('img')
    mainImg.style.cssText = `
    width: 100%;
    margin-bottom: 20px;
    border-radius: 10px;
    `
    mainImg.setAttribute('src', 'images/image-equilibrium.jpg');
    
    


    const title = document.createElement('h3');
    title.style.cssText = `
    color: hsl(0, 0%, 100%);
    font-weight: 600;
    font-size: 20px;
    `
    title.innerText = 'Equilibrium #3429';
    


    const text = document.createElement('p');
    text.style.cssText = `
    color: hsl(215, 51%, 70%);
    font-size: 18px;
    line-height: 20px;
    `
    text.innerText = 'Our Equilibrium collection promotes balance and calm.';
    



    const days = document.createElement('span');
    days.style.cssText = `
    color: hsl(215, 51%, 70%);
    display: flex;
    align-items: center;
    padding-left: 5px;
    `
    days.innerText = '3 days left';
    



    const userAbout = document.createElement('div');
    userAbout.style.cssText = `
    margin-top: 20px;
    display: flex;
    align-items: center;
    `
    


    const container = document.createElement('div');
    container.style.cssText = `
    display: flex;
    margin-bottom: 15px;
    `
 


    const icon = document.createElement('img');
    icon.setAttribute('src', 'images/icon-ethereum.svg');
    icon.style.marginRight = '2px'
    
    
  


    const numberEth = document.createElement('span');
    numberEth.style.cssText = `
    display: inline-block;
    color: hsl(178, 100%, 50%);
    padding-left: 5px;
    `
    numberEth.innerText = '0.041 ETH';
    



    const clock = document.createElement('img');
    clock.setAttribute('src', 'images/icon-clock.svg');
    clock.style.paddingLeft = '70px';
    



    const line = document.createElement('hr');
    line.style.borderColor = 'hsl(215, 32%, 27%)';
    



    const userAvatar = document.createElement('img');
    userAvatar.style.cssText = `
    width: 50px;
    border: 2px solid white;
    border-radius: 50%;
    margin-right: 15px;
    `
    userAvatar.setAttribute('src', 'images/image-avatar.png')
    



    const userCreation = document.createElement('span');
    userCreation.style.cssText = `
    color: hsl(215, 51%, 70%);
    text-align: center;
    `
    userCreation.innerText = 'Creation of ';
    



    const userName = document.createElement('span');
    userName.innerText = 'Jules Wyvern';
    userName.style.color = 'hsl(0, 0%, 100%)';
    

    
    body.append(wrapper);
    wrapper.append(card);
    card.append(mainImg);
    card.append(title);
    card.append(text);
    card.append(container);
    container.append(icon);
    container.append(numberEth);
    container.append(clock);
    container.append(days);
    card.append(line);
    card.append(userAbout);
    userAbout.append(userAvatar, userCreation)
    userCreation.append(userName)
    
}
alert('Я оцениваю свою работу на 0 баллов');

nftCard()



    
    
    
    
