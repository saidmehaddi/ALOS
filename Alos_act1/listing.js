var listing_1 = {
  memes: [
    '{{repeat(100)}}',
    {
      id: '{{objectId()}}',
            index: '{{index()}}',
            name: '{{lorem(5,"words").toUpperCase()}}',
            topText: '{{lorem(1,"sentence")}}',
            bottomText: '{{lorem(1,"sentence")}}', 
            picture: 'http://placehold.it/32x32',
            width: '{{integer(400,600)}}',
            height: '{{integer(100,600)}}',
            dateCreated:  '{{date(new Date(2007, 0, 1), new Date())}}',
            category: '{{random("anime", "animaux", "célébrités","comedian",)}}',
            hosts: [
                '{{repeat(3)}}', {
                    id: '{{index()}}',
                    name: '{{firstName()}} {{surname()}}'
                }
             ]
              
    }
    

]

}