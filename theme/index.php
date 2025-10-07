<?php get_header(); ?>
<?php if (have_posts()) : ?>
    <?php while (have_posts()) : the_post(); ?>
        <section class="hero">
            <div class="wrapper">
                <div class="hero__media">
                    <?php the_post_thumbnail('full'); ?>
                </div>
                <div class="hero__container">
                    <h1>
                        <?php the_title(); ?>
                        <br />
                        <span><?php bloginfo('name'); ?></span>
                    </h1>
                    <p><?php the_content(); ?></p>
                        <a href="<?php the_permalink(); ?>" class="button">Voir Plus</a>
                </div>
            </div>
        </section>
     <?php endwhile; ?>
<?php endif; ?>
<?php get_footer(); ?>