import '../css/components.css';

export const greetings = (name) => {
    console.log('Creating label h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hi ${name}`;

    document.body.append(h1);
}