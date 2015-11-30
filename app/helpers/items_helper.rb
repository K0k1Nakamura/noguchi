module ItemsHelper
  def give_class_to_li(index)
    return "selected" if index == 0
    return "move-right" if index == 1
  end

  def give_data_to_li(item)
    str = ""
    str = str + 'data-tidimi=true ' if item.tidimi
    str = str + 'data-misogi=true' if item.misogi
    str
  end
end
