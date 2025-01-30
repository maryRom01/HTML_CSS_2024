/**
 * Завдання
        
Дано масив books.

const books = [
  { 
    author: "Люсі Фолі",
    name: "Список запрошених",
    price: 70 
  }, 
  {
   author: "Сюзанна Кларк",
   name: "Джонатан Стрейндж і м-р Норрелл",
  }, 
  { 
    name: "Дизайн. Книга для недизайнерів.",
    price: 70
  }, 
  { 
    author: "Алан Мур",
    name: "Неономікон",
    price: 70
  }, 
  {
   author: "Террі Пратчетт",
   name: "Рухомі картинки",
   price: 40
  },
  {
   author: "Анґус Гайленд",
   name: "Коти в мистецтві",
  }
];

Виведіть цей масив на екран у вигляді списку (тег ul – список має бути згенерований за допомогою Javascript).

На сторінці повинен знаходитись div з id="root", куди і потрібно буде додати цей список (схоже завдання виконувалось в модулі basic).

Перед додаванням об'єкта на сторінку потрібно перевірити його на коректність 
(в об'єкті повинні міститися всі три властивості - author, name, price). 

Якщо якоїсь із цих властивостей немає, в консолі має висвітитися помилка із зазначенням - якої властивості немає в об'єкті.

Ті елементи масиву, які не є коректними за умовами попереднього пункту, не повинні з'явитися на сторінці.
 */

const books = [
    { 
      author: "Люсі Фолі",
      name: "Список запрошених",
      price: 70 
    }, 
    {
     author: "Сюзанна Кларк",
     name: "Джонатан Стрейндж і м-р Норрелл",
    }, 
    { 
      name: "Дизайн. Книга для недизайнерів.",
      price: 70
    }, 
    { 
      author: "Алан Мур",
      name: "Неономікон",
      price: 70
    }, 
    {
     author: "Террі Пратчетт",
     name: "Рухомі картинки",
     price: 40
    },
    {
     author: "Анґус Гайленд",
     name: "Коти в мистецтві",
    }
  ];

  const selectorRoot = '#root';
  const expectedProps = ["author", "name", "price"];

  class InvalidBookError extends Error {
    constructor (invalidBook) {
        super(`Invalid properties of the book: author:${invalidBook.author}, name:${invalidBook.name}, price:${invalidBook.price}`);
    }
  }

  class Book {
    constructor(author, name, price) {
        this.author = author;
        this.name = name;
        this.price = price;
    }

    render(elementContainer = selectorRoot) {
        const item = document.createElement('li');

        const author = document.createElement('p');
        author.innerText = this.author;

        const name = document.createElement('p');
        name.innerText = this.name;
        name.classList.add('name');

        const price = document.createElement('p');
        price.innerText = this.price;

        item.appendChild(author);
        item.appendChild(name);
        item.appendChild(price);

        document.querySelector(elementContainer).append(item);
    }
  }

  books.forEach(book => {
    try {
        const hasAllProps = expectedProps.every(prop => book.hasOwnProperty(prop));
        if (hasAllProps) {
            new Book(book.author, book.name, book.price).render();
        } else {
            throw new InvalidBookError(book);
        }
    } catch(err) {
        console.error(err);
    }
  })