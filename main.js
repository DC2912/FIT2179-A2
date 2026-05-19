const EMBED_OPTS = { actions: false, renderer: "svg" };

function embed(id, specUrl) {
  vegaEmbed(`#${id}`, specUrl, EMBED_OPTS).catch(err => {
    document.getElementById(id).innerHTML =
      `<p style="font-family:monospace;color:#c8522a;font-size:.8rem;padding:1rem;">
        Could not render chart.<br><small>${err.message}</small>
      </p>`;
  });
}

embed("chart1",  "./charts/grouped_bar.json");
embed("chart2",  "./charts/inout_line_dumbbell.json");
embed("chart3",  "./charts/symbol_map.json");
embed("chart4",  "./charts/choropleth.json");
embed("chart5",  "./charts/slope_chart.json");
embed("chart6",  "./charts/industry_timeseries.json");
embed("chart7a", "./charts/dot_plot_desc.json");
embed("chart7b", "./charts/dot_plot_asc.json");
embed("chart8a", "./charts/donut_2016.json");
embed("chart8b", "./charts/donut_2021.json");