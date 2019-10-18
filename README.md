# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|username|string|null: false, foreign_key: true|
|email|string|null: false, foreign_key: true|

### Association
- has_many :messages
- has_many :groups, through: :groups_users

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|groupname|string|null: false, foreign_key: true|

### Association
- has_many :users_group
- has_many :users, through: :groups_users

## textテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|foreign_key: true|
|image|string|foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group