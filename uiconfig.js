
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const uipages = merge([
    {
        plugins: [
            new HtmlWebpackPlugin({ filename: 'ui/index.html',template: 'src/ui/index.pug'}),
            new HtmlWebpackPlugin({ filename: 'ui/1_1_basic_typography.html', template: 'src/ui/1_1_basic_typography.pug'}),
            new HtmlWebpackPlugin({ filename: 'ui/1_2_text_alignment_display.html', template: 'src/ui/1_2_text_alignment_display.pug'}),
            new HtmlWebpackPlugin({ filename: 'ui/1_3_floats_position.html', template: 'src/ui/1_3_floats_position.pug'}),
            new HtmlWebpackPlugin({ filename: 'ui/1_4_colors_background.html', template: 'src/ui/1_4_colors_background.pug'}),
            new HtmlWebpackPlugin({ filename: 'ui/1_5_spacing.html', template: 'src/ui/1_5_spacing.pug'}),
            new HtmlWebpackPlugin({ filename: 'ui/1_6_sizing.html', template: 'src/ui/1_6_sizing.pug'}),
            new HtmlWebpackPlugin({ filename: 'ui/1_7_breakpoints.html', template: 'src/ui/1_7_breakpoints.pug'}),
            new HtmlWebpackPlugin({ filename: 'ui/2_1_buttons.html', template: 'src/ui/2_1_buttons.pug'}),
            new HtmlWebpackPlugin({ filename: 'ui/2_2_navbar.html', template: 'src/ui/2_2_navbar.pug'}),
            new HtmlWebpackPlugin({ filename: 'ui/2_3_list_groups_badges.html', template: 'src/ui/2_3_list_groups_badges.pug'}),
            new HtmlWebpackPlugin({ filename: 'ui/2_4_forms.html', template: 'src/ui/2_4_forms.pug'}),
            new HtmlWebpackPlugin({ filename: 'ui/2_5_input_groups.html', template: 'src/ui/2_5_input_groups.pug'}),
            new HtmlWebpackPlugin({ filename: 'ui/2_6_alerts_progress.html', template: 'src/ui/2_6_alerts_progress.pug'}),
            new HtmlWebpackPlugin({ filename: 'ui/2_7_tables_pagination.html', template: 'src/ui/2_7_tables_pagination.pug'}),
            new HtmlWebpackPlugin({ filename: 'ui/2_8_cards.html', template: 'src/ui/2_8_cards.pug'}),
            new HtmlWebpackPlugin({ filename: 'ui/2_9_media_object.html', template: 'src/ui/2_9_media_object.pug'}),
            new HtmlWebpackPlugin({ filename: 'ui/2_10_jumbotron.html', template: 'src/ui/2_10_jumbotron.pug'}),
            new HtmlWebpackPlugin({ filename: 'ui/3_1_grid_system.html', template: 'src/ui/3_1_grid_system.pug'}),
            new HtmlWebpackPlugin({ filename: 'ui/3_2_grid_alignment.html', template: 'src/ui/3_2_grid_alignment.pug'}),
            new HtmlWebpackPlugin({ filename: 'ui/3_3_flexbox.html',template: 'src/ui/3_3_flexbox.pug'}),
            new HtmlWebpackPlugin({ filename: 'ui/3_4_auto_margins_wrapping_order.html',template: 'src/ui/3_4_auto_margins_wrapping_order.pug'}),
            new HtmlWebpackPlugin({ filename: 'ui/4_1_carousel.html', template: 'src/ui/4_1_carousel.pug'}),
            new HtmlWebpackPlugin({ filename: 'ui/4_2_collapse.html', template: 'src/ui/4_2_collapse.pug'}),
            new HtmlWebpackPlugin({ filename: 'ui/4_3_tooltips.html', template: 'src/ui/4_3_tooltips.pug'}),
            new HtmlWebpackPlugin({ filename: 'ui/4_4_popovers.html', template: 'src/ui/4_4_popovers.pug'}),
            new HtmlWebpackPlugin({ filename: 'ui/4_5_modals.html', template: 'src/ui/4_5_modals.pug'}),
            new HtmlWebpackPlugin({ filename: 'ui/4_6_scrollspy.html',template: 'src/ui/4_6_scrollspy.pug'})
        ]
    }
]);

module.exports = uipages;