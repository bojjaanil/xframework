
    XF.UI.enhancementList.fieldset = {
        selector : 'fieldset[data-role=controlgroup]',
        enhanceMethod : 'enhanceFieldset'
    };

    /**
     Enhances fieldset view
     @param textInput DOM Object
     @private
     */
    XF.UI.enhanceFieldset = function(fieldset) {
        var jQFieldset = $(fieldset);
        if(!fieldset || !jQFieldset instanceof $) {
            return;
        }

        if(jQFieldset.attr('data-skip-enhance') == 'true') {
            return;
        }

        jQFieldset.attr({'data-skip-enhance':true});

        // If the inputs have a parent fieldset[data-role=controlgroup], the fieldset
        // is assigned a class xf-controlgroup,

        jQFieldset.addClass('xf-controlgroup');

        // If there's a legend element inside the fieldset, it becomes div.xf-label
        var legend = jQFieldset.children('legend').detach();

        // the inputs are also wrapped in a div.xf-controlgroup-controls
        jQFieldset.wrapInner('<div class=xf-controlgroup-controls>');
        jQFieldset.prepend(legend);

        if(legend.length) {
            var legendDiv = $('<div></div>');
            var newLegendAttrs = {};
            _.each(legend[0].attributes, function(attribute) {
                newLegendAttrs[attribute.name] = attribute.value;
            });
            legendDiv.attr(newLegendAttrs);
            legendDiv.addClass('xf-label');
            legendDiv.html(legend.html());
            legend.outerHtml(legendDiv.outerHtml());
        }
    };