var shop = [
    {
      title: 'Siberian Husky',
      image: 'https://th.bing.com/th?id=OSK.HERODmanEm6l2Y5lu-QmhjpiXfwRDdMewXRiH33x8G_G4bg&w=384&h=228&c=13&rs=2&o=6&oif=webp&pid=SANGAM',
      price: '$975-$2,500', 
    },
    {
      title: 'Chow Chow',
      image: 'https://th.bing.com/th?id=OSK.HEROxICFmoHCAZNNvq0nIvf6Zf9fHPuM3la0NdoAm_tyU6U&w=384&h=228&c=13&rs=2&o=6&oif=webp&pid=SANGAM',
      price: '$2,000-$4,000', 
    },
    {
      title: 'Siamese Cat',
      image: 'https://th.bing.com/th?id=OSK.HERORo9p45P5515Tk4BXFEfxEG-UZg7CHh_0Uq_HnZG31rA&w=384&h=228&c=13&rs=2&o=6&oif=webp&pid=SANGAM',
      price: '$500-$1,200', 
    },
    {
      title: 'Shiba Inu',
      image: 'https://th.bing.com/th?id=OSK.HEROTkFwcEiMmkaK1PLdDdWyXrMTGIaHG9zUswA4LE8YI0I&w=384&h=228&c=13&rs=2&o=6&oif=webp&pid=SANGAM',
      price: '$1,400-2,200', 
    },
    {
      title: 'Persian Cat',
      image: 'https://th.bing.com/th?id=OSK.HEROHA4Mt8AHfWtVzIk7CKvCYx-R5hhXYK3vZxVcBRBSK2A&w=384&h=228&c=13&rs=2&o=6&oif=webp&pid=SANGAM',
      price: '$1,200-1,800', 
    },
    {
      title: 'Scottish Fold',
      image: 'https://th.bing.com/th?id=OSK.HEROKkreNEV0VAq7jL-ycjjPLfQZoe0ZFRzJDF8kY1ApicM&w=384&h=228&c=13&rs=2&o=6&oif=webp&pid=SANGAM',
      price: '$500-$2,000', 
    },
    
  
    
    ]
    
    var postHTML = " "
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    
  
  
  
    for (var i=0; i < shop.length; i++){
        var heading = '<div class="product ' + '"><span><h5>' + shop[i].title + '</h5>'
        var image = '<img src="' + shop[i].image + '"/'
        var price = '<p> $' + shop[i].price + '</p></span>'
        var concatThis = heading + image + price;
        postHTML = postHTML + concatThis
    }
    document.getElementById('Market').innerHTML = postHTML