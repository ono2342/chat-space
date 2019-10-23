class GroupsController < ApplicationController
def new
  @groups = Group.new
end

def create
  @groups =Group.new(group_params)
end

def edit
end

def update
end

end
