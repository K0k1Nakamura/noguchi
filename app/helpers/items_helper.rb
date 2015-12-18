module ItemsHelper
  def give_class_to_li(index)
    return "selected" if index == 0
    return "move-right" if index == 1
  end

  def give_data_to_li(item)
    str = ""
    str = str + 'data-h=true ' if item.h
    str = str + 'data-st=true ' if item.st
    str = str + 'data-tg=true ' if item.tg
    str = str + 'data-tc=true ' if item.tc
    str = str + 'data-oc=true ' if item.oc
    str = str + 'data-ot=true ' if item.ot
    str
  end
end
