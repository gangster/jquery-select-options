// Generated by CoffeeScript 1.6.2
/*
Created by Kyle Ellman
https://github.com/kyleellman/jquery-select-options
*/


(function() {
  (function($, window) {
    var addOption;

    addOption = function(selectMenu, value, text, selected) {
      var newOption;

      newOption = $('<option></option>').attr('value', value).text(text);
      if (value === selected) {
        newOption.attr('selected', 'selected');
      }
      return selectMenu.append(newOption);
    };
    return $.fn.selectOptions = function(options, otherOptions) {
      var groupName, groupOptions, newGroup, option, _i, _j, _len, _len1, _results, _results1;

      if (otherOptions == null) {
        otherOptions = {};
      }
      this.empty();
      if (otherOptions != null ? otherOptions.includeBlank : void 0) {
        addOption(this, '', otherOptions.includeBlank);
      }
      if (options instanceof Array) {
        _results = [];
        for (_i = 0, _len = options.length; _i < _len; _i++) {
          option = options[_i];
          _results.push(addOption(this, option.value, option.text, otherOptions != null ? otherOptions.selected : void 0));
        }
        return _results;
      } else {
        _results1 = [];
        for (groupName in options) {
          groupOptions = options[groupName];
          newGroup = $('<optgroup></optgroup>').attr('label', groupName);
          for (_j = 0, _len1 = groupOptions.length; _j < _len1; _j++) {
            option = groupOptions[_j];
            addOption(newGroup, option.value, option.text, otherOptions != null ? otherOptions.selected : void 0);
          }
          _results1.push(this.append(newGroup));
        }
        return _results1;
      }
    };
  })(jQuery, window);

}).call(this);
