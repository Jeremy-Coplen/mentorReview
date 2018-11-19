create table users (
    id serial primary key,
    name varchar(255),
    email varchar(255)
)

insert into users (name, email)
values ("Jeremy Coplen", "example@email.com")

update users
set name = "Justin Coplen"
where id = 1

delete from users
where id = 1