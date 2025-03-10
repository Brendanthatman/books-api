import { createClient } from 'https://cdn.skypack.dev/@supabase/supabase-js'
const supabaseUrl = 'https://fzsbhlotzaschsqoovte.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ6c2JobG90emFzY2hzcW9vdnRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE2NDE5NTQsImV4cCI6MjA1NzIxNzk1NH0.SvE7F3MovtB8myZKuqOWDPWz5PYRBNwrmyi3kmnnMsI'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
    let { data: Books, error } = await supabase
        .from('Books')
        .select('*')
    let booksList = document.getElementById('books');

    for (let book of Books) {
        booksList.innerHTML += `<tr><td>${book.Title}</td><td>${book.Author}</td><td>${book.ISBN}</td></tr>`;
    }
}

getBooks();